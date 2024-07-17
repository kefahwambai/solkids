import axios from 'axios';

// Base URL for your Rails backend
const BASE_URL = 'http://localhost:3000'; // Adjust this URL based on your backend deployment

// Helper function to get the JWT token from localStorage
const getToken = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user).token : null;
};

// Axios instance with base settings
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the JWT token in every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// User-related API functions
export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const login = async (email, password) => {
  const { data } = await axiosInstance.post('/login', { email, password });
  localStorage.setItem('user', JSON.stringify(data.user));
  localStorage.setItem('token', JSON.stringify(data.token));
  console.log(data.user)
  console.log(data.token)
  return data;
};

export const register = async (registerData) => {
  const { data } = await axiosInstance.post('/signup', registerData);
  console.log(registerData)
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};


export const updateProfile = async (user) => {
  const { data } = await axiosInstance.put('/users/updateProfile', user);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const changePassword = async (passwords) => {
  await axiosInstance.put('/users/changePassword', passwords);
};

export const getAll = async (searchTerm) => {
  const { data } = await axiosInstance.get('/users' + (searchTerm ? `?search=${searchTerm}` : ''));
  return data;
};

export const toggleBlock = async (userId) => {
  const { data } = await axiosInstance.put(`/users/toggleBlock/${userId}`);
  return data;
};

export const getById = async (userId) => {
  const { data } = await axiosInstance.get(`/users/${userId}`);
  return data;
};

export const updateUser = async (userData) => {
  const { data } = await axiosInstance.put('/users/update', userData);
  return data;
};

