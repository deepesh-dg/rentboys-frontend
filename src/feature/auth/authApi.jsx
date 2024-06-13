import axios from 'axios';

const authApi = {
  login: async (user) => {
    const response = await axios.post('/api/login', user);
    return response.data;
  },
};

export default authApi;
