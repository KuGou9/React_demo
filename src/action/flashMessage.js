import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constaants/index';

export const addFlashMessage = (message) => {
  return {
    type: ADD_FLASH_MESSAGE,
    message,
  };
};

// 常规操作下要寻找到制定的数据都是通过id
export const deleteFlashMessage = (id) => {
  return {
    type: DELETE_FLASH_MESSAGE,
    id,
  };
};
