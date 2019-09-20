import Axios from 'axios';

// 'https://rocketseat-node.herokuapp.com/api'

const api = Axios.create({
  baseURL: 'http://localhost:3001/api'
});

export default api;
