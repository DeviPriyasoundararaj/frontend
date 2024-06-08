import axios from 'axios';

const API_URL = '/api/auth';

export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const register = (user) => {
  return axios.post(`${API_URL}/register`, user);
};

export const forgotPassword = (email) => {
  return axios.post(`${API_URL}/forgot-password`, { email });
};

export const resetPassword = (token, password) => {
  return axios.post(`${API_URL}/reset-password/${token}`, { password });
};
