import { combineReducers } from 'redux';
import login from './login';
import flashMessage from './flashMessage';

const rootReducer = combineReducers({
  login,
  flashMessage,
});

export default rootReducer;
