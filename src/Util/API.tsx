import axios from 'axios';
import { getCookie } from 'typescript-cookie';

export type ContactModel = {
  contactName: string;
  contactEmail: string;
  subject: string;
  message: string;
};

const getAuthorizationFromLocalStorage = (): string | null => {
  const getFromLocalStorage = sessionStorage.getItem('userdetails');
  if (getFromLocalStorage) {
    const user = JSON.parse(getFromLocalStorage as string);
    return 'Basic ' + btoa(user.email + ':' + user.pwd);
  } else {
    return null;
  }
};

// API Instance
const API = axios.create({
  baseURL: 'http://localhost:8080',
});

// To inject into header for all outgoing request
API.interceptors.request.use((config) => {
  if (sessionStorage.getItem('XSRF-TOKEN')) {
    config.headers['X-XSRF-TOKEN'] = sessionStorage.getItem('XSRF-TOKEN');
    config.headers['content-type'] = 'application/json';
  }
  if (sessionStorage.getItem('userdetails')) {
    config.headers['Authorization'] = getAuthorizationFromLocalStorage();
    config.headers['content-type'] = 'application/json';
  }

  return config;
});

export const LoginAPI = async (user: {
  email: string;
  pwd: string;
  authStatus: string | '';
}) => {
  user.authStatus = 'AUTH';
  window.sessionStorage.setItem('userdetails', JSON.stringify(user));
  try {
    const response = await API.get('/user', {
      withCredentials: true,
    });
    const xsrf = getCookie('XSRF-TOKEN')!;
    const userDetails = { ...response.data, authStatus: 'AUTH' };
    window.sessionStorage.setItem('userdetails', JSON.stringify(userDetails));
    window.sessionStorage.setItem('XSRF-TOKEN', xsrf);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const RegisterAPI = async (user: { email: string; pwd: string }) => {
  try {
    const response = await API.post('/register', user);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getNoticesAPI = async () => {
  try {
    const response = await API.get('/notice');
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const sendContactAPI = async (contactDetails: ContactModel) => {
  try {
    const response = await API.post('/contact', contactDetails);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
