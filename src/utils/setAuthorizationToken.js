import axios from 'axios';

// 将jwt字符串添加到headers里面
const setAuthorizationToken = (token) => {
  console.log(token);
  if (token) {
    axios.defaults.headers.common['Authorization'] = `login ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthorizationToken;
