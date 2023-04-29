import axios from 'axios';

let api;

export const DEVELOPMENT = process.env.NODE_ENV === 'development';

if (DEVELOPMENT) {
  api = 'http://localhost:8080/api/';
} else {
  api = `${window.location.origin}/api/`;
}

const API = axios.create({
  baseURL: api,
});
export default API;
