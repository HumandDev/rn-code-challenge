import {create} from 'apisauce';

const api = create({
  baseURL: 'https://rickandmortyapi.com/api/character',
  timeout: 15000,
});

export default api;
