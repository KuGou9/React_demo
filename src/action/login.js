import axios from 'axios';
import { SET_CURRENT_USER } from '../constaants/index';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

export const logout = () => {
  return (dispatch) => {
    // 1.删除本地的登陆账号
    localStorage.removeItem('jwtToken');
    // 2.删除redux的数据
    dispatch(setCurrentUser({}));
    // 3.取消请求头中的欣喜
    setAuthorizationToken(false);
  };
};

export const login = (data) => {
  return (dispatch) => {
    // let token = null;
    axios.post('/api/login', data).then(
      (response) => {
        // 获取到了数据要在这里执行，这里定义的const在外面无法使用
        const token = response.data;
        dispatch(setCurrentUser(jwtDecode(token)));
      },
      (response) => {
        console.log('error：' + response);
      }
    );
    return axios.post('/api/login', data);
  };
};
