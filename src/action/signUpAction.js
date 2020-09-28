import axios from 'axios';

export const userSignupRequest = (userData) => {
  return (dispatch) => {
    // 注意这里返回的是axios执行过后的结果对象
    return axios.post('/api/users', userData);
  };
};  
