import axios from 'axios';
import { constants } from './constants';

const instance = axios.create({
  baseURL: constants.url.tmdb,
});

export default instance;
