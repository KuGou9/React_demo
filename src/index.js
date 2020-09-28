import React from 'react';
import ReactDOM from 'react-dom';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';

import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import FlashMessageList from './components/flash/FlashMessageList';

import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './action/login';
import jwtDecode from 'jwt-decode';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

// 表示已经登陆了，那么要将这个信息同步到redux中
if (localStorage.jwtToken) {
  // 启动一次发送头，因为首次登陆并不会发送这个头部信息
  setAuthorizationToken(localStorage.jwtToken);
  // 同步redux
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    {/* 这里需要一个配置文件。因为在routes文件中没有外层的Router包裹，这里就多加了一层 */}
    <Router routes={routes}>
      <NavBar />
      <FlashMessageList />
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
