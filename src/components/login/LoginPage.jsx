import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <LoginForm />
        </div>
        <div className="col-md-2"></div>
      </div>
    );
  }
}

export default LoginPage;
