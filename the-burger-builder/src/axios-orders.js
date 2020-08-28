import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-22697.firebaseio.com',
});

export default instance;
