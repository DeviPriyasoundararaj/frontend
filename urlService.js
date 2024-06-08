import axios from 'axios';

const API_URL = '/api/url';

export const createShortUrl = (originalUrl) => {
  const token = localStorage.getItem('token');
  return axios.post(
    `${API_URL}/shorten`,
    { originalUrl },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const getUrlCount = () => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}/url-count`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAllUrls = () => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}/urls`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
