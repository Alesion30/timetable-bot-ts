import axios from 'axios';

const instance = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use((request) => {
  console.log('Request: ', request);
  return request;
});

instance.interceptors.response.use((response) => {
  console.log('Response: ', response);
  return response;
});

export default instance;
