import axios from 'axios';

export const createOrder = async order => {
  try {
    const { data } = await axios.post('/orders/create', order);
    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const getNewOrderForCurrentUser = async () => {
  const { data } = await axios.get('/orders/newOrderForCurrentUser');
  return data;
};

export const pay = async paymentId => {
  try {
    const { data } = await axios.put('/orders/pay', { paymentId });
    return data;
  } catch (error) {}
};

export const trackOrderById = async orderId => {
  const { data } = await axios.get('/orders/track/' + orderId);
  return data;
};

export const getAll = async state => {
  const { data } = await axios.get(`/orders/${state ?? ''}`);
  return data;
};

export const getAllStatus = async () => {
  const { data } = await axios.get(`/orders/allstatus`);
  return data;
};
