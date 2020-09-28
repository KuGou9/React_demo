import { SET_CURRENT_USER } from '../constaants/index';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  // 这个数值代表是否登陆，并且存储在resux中
  isAuthenticated: false,
  user: {},
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { isAuthenticated: !isEmpty(action.user), user: action.user };
    default:
      return state;
  }
};

// const login = (state = {}, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

export default login;
