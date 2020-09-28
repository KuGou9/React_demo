import React from 'react';
import { login } from '../../action/login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    errors: {},
    isLoading: false,
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.setState({ errors: {}, isLoading: true });
    this.props.login(this.state).then(
      (response) => {
        this.props.history.push('/');
        const token = response.data;
        // console.log(token);
        localStorage.setItem('jwtToken', token);
        // console.log(jwtDecode(token));
        // setCurrentUser需要dispatch触发
        // store.dispatch(setCurrentUser(jwtDecode(token)));
        // console.log(setCurrentUser);
        // setCurrentUser(jwtDecode(token));
      },
      // 这里的response不可替换成别的名字
      ({ response }) => {
        console.log(response);
        this.setState({ errors: response.data, isLoading: false });
      }
    );
  };
  render() {
    const { errors, isLoading } = this.state;
    // console.log(this.state);
    return (
      <form>
        <h1>Login</h1>
        {/* username */}
        <div className="form-group">
          <label htmlFor="username">Username：</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.onChange}
            autoComplete="off"
            // className="form-control"
            className={classnames('form-control', {
              'is-invalid': errors.username,
            })}
          />
          {errors.username && (
            <span className="form-text text-muted">{errors.username}</span>
          )}
        </div>

        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password：</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.onChange}
            autoComplete="off"
            // className="form-control"
            className={classnames('form-control', {
              'is-invalid': errors.password,
            })}
          />
          {errors.password && (
            <span className="form-text text-muted">{errors.password}</span>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          onClick={this.submit}
          disabled={isLoading}
        >
          Login
        </button>
      </form>
    );
  }
}

export default withRouter(connect(null, { login })(LoginForm));
