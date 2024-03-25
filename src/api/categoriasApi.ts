import { envs } from '../config/envs';
import axios from 'axios';

const categoriasApi = axios.create({
  baseURL: envs.BASE_URL,
});

export { categoriasApi };
