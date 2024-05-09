import axios from 'axios';

export const createOrder = async order => {
  console.log(order)
  try {
    const { data } = await axios.post('https://solserve.vercel.app/orders/create', order);
    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const getNewOrderForCurrentUser = async () => {
  const { data } = await axios.get('https://solserve.vercel.app/orders/newOrderForCurrentUser');
  return data;
};

export const pay = async paymentId => {
  try {
    const { data } = await axios.put('https://solserve.vercel.app/orders/pay', { paymentId });
    return data;
  } catch (error) {}
};

export const trackOrderById = async orderId => {
  const { data } = await axios.get('https://solserve.vercel.app/orders/track/' + orderId);
  return data;
};

export const getAll = async state => {
  const { data } = await axios.get(`https://solserve.vercel.app/orders/${state ?? ''}`);
  return data;
};

export const getAllStatus = async () => {
  const { data } = await axios.get(`https://solserve.vercel.app/orders/allstatus`);
  return data;
};
