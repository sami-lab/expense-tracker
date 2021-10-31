import axios from 'axios';

let baseURL = 'http://localhost:5000/api/v1';
baseURL = 'https://authentication-testing.herokuapp.com/api';
const instance = axios.create({
  baseURL,
});
export default instance;
