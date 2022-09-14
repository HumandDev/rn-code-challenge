import {create} from 'apisauce';

const api = create({
  baseURL: 'https://rickandmortyapi.com/api',
  timeout: 15000,
});

export default api;
