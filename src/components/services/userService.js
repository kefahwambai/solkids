import axios from 'axios';

export const getUser = () =>
  localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;

export const login = async (email, password) => {
  const { data } = await axios.post('https://solserve.vercel.app/users/login', { email, password });
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const register = async registerData => {
  console.log(registerData)
  const { data } = await axios.post('https://solserve.vercel.app/users/register', registerData);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const updateProfile = async user => {
  const { data } = await axios.put('https://solserve.vercel.app/users/updateProfile', user);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const changePassword = async passwords => {
  await axios.put('/users/changePassword', passwords);
};

export const getAll = async searchTerm => {
  const { data } = await axios.get('https://solserve.vercel.app/users/getAll/' + (searchTerm ?? ''));
  return data;
};

export const toggleBlock = async userId => {
  const { data } = await axios.put('https://solserve.vercel.app/users/toggleBlock/' + userId);
  return data;
};

export const getById = async userId => {
  const { data } = await axios.get('https://solserve.vercel.app/users/getById/' + userId);
  return data;
};

export const updateUser = async userData => {
  const { data } = await axios.put('https://solserve.vercel.app/users/update', userData);
  return data;
};
