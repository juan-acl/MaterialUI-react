import { url } from '../constants';

export const getUser = async (user) => {
  const response = await fetch(`${url}${user}`, { method: 'GET' });
  const payload = response.json();
  return payload;
};
