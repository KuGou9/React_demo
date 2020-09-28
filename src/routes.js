import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import SignupPage from './components/signup/SignupPage';
import Login from './components/login/LoginPage';
import Shop from './components/shop/Shop';
import requireAuth from './utils/requireAuth';

export default (
  <div className="container">
    <Route exact path="/" component={App}></Route>
    <Route path="/signup" component={SignupPage}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/shop" component={requireAuth(Shop)}></Route>
  </div>
);
