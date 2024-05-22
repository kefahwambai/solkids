import { useState, useEffect, createContext, useContext, useRef } from 'react';
import * as userService from './services/userService';
import { toast } from 'react-toastify';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userService.getUser());
  const logoutTimerRef = useRef(null);

  useEffect(() => {
    const startLogoutTimer = () => {
      const timer = setTimeout(() => {
        logout();
        toast.info('You have been logged out due to inactivity.');
      }, 20 * 60 * 1000); 
      logoutTimerRef.current = timer;
    };

    const resetLogoutTimer = () => {
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
      }
      startLogoutTimer();
    };

    const handleUserActivity = () => {
      resetLogoutTimer();
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);

    startLogoutTimer();

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
      }
    };
  }, []);

  const login = async (email, password) => {
    try {
      const user = await userService.login(email, password);
      setUser(user);
      toast.success('Login Successful');
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const register = async data => {
    try {
      const user = await userService.register(data);
      setUser(user);
      toast.success('Register Successful');
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const logout = () => {
    userService.logout();
    setUser(null);
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
    }
    toast.success('Logout Successful');
  };

  const updateProfile = async user => {
    const updatedUser = await userService.updateProfile(user);
    toast.success('Profile Update Was Successful');
    if (updatedUser) setUser(updatedUser);
  };

  const changePassword = async passwords => {
    await userService.changePassword(passwords);
    logout();
    toast.success('Password Changed Successfully, Please Login Again!');
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, updateProfile, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
