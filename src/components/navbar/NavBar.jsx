import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../action/login';

class NavBar extends React.Component {
  render() {
    const logout = (e) => {
      e.preventDefault();
      // console.log(this.props.logout);
      this.props.logout();
    };

    const { isAuthenticated } = this.props.login;

    // 只有两种状态，一种是没登陆的游客状态，一种是登录的用户状态
    const userLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" onClick={logout}>
            退出
          </a>
        </li>
      </ul>
    );

    const questLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            注册
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            登陆
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Login功能
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample">
          {isAuthenticated ? userLinks : questLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // 这里指的是redux中的reducer名称，并不是随意写的
    login: state.login,
  };
};

export default connect(mapStateToProps, { logout })(NavBar);
