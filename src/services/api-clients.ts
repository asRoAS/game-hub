import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd09742688f1546b3bd04fff1d345b7d8',
  },
});
