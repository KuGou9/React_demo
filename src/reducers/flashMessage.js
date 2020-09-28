import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constaants/index';
// 会随机生成id
import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

const flashMessage = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      // 三大原则：state不能直接被修改，只能返回一个新的状态
      //   es6的重构
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text,
        },
      ];
    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state, { id: action.id });
      // 表示该数据是存在的
      if (index >= 0) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
      return state;
    default:
      return state;
  }
};

export default flashMessage;
