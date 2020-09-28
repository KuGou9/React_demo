import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    error: {},
    isLoading: false,
  };

  // 将改变的事件一齐封装
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    // 获取到返回的错误信息
    this.props.userSignupActions.userSignupRequest(this.state).then(
      () => {
        // history本身找不到，虽然form不是直接的路由子元素，但是他的父元素是，所以父元素可以进行history的传递
        this.props.history.push('/');
        // 由于这里没有关联redux父元素设置了redux。所以在父元素上设置
        this.props.flashActions.addFlashMessage({
          type: 'success',
          text: '注册成功，欢迎您的加入',
        });
      },
      // 因为传回来的是一个对象
      ({ response }) => {
        this.setState({ error: response.data, isLoading: false });
      }
    );
  };

  render() {
    // 防止每一次都要读取
    const { error, isLoading } = this.state;
    return (
      <form>
        <h1>Join our community</h1>
        {/* username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            // className="form-control"
            id="username"
            name="username"
            onChange={this.onChange}
            // autoComplete 用途：规定输入字段是否应该启用自动完成功能
            autoComplete="off"
            // classnames有两个参数，一个是央视是否存在，第二个独享参数决定是否要显示样式
            className={classnames('form-control', {
              'is-invalid': error.username,
            })}
          />
          {error.username && (
            <span className="form-text text-muted">{error.username}</span>
          )}
        </div>
        {/* email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            // className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={this.onChange}
            autoComplete="off"
            className={classnames('form-control', {
              'is-invalid': error.email,
            })}
          />
          {error.email && (
            <span className="form-text text-muted">{error.email}</span>
          )}
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          {/* password */}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            // className="form-control"
            id="password"
            name="password"
            onChange={this.onChange}
            autoComplete="off"
            className={classnames('form-control', {
              'is-invalid': error.password,
            })}
          />
          {error.password && (
            <span className="form-text text-muted">{error.password}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="PasswordConfirm">PasswordConfirm</label>
          <input
            type="password"
            // className="form-control"
            id="PasswordConfirm"
            name="passwordConfirm"
            onChange={this.onChange}
            autoComplete="off"
            className={classnames('form-control', {
              'is-invalid': error.passwordConfirm,
            })}
          />
          {error.passwordConfirm && (
            <span className="form-text text-muted">
              {error.passwordConfirm}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmit}
          // 防止重复提交
          disabled={isLoading}
        >
          注册
        </button>
      </form>
    );
  }
}

// 这种相较于有路由直接子元素进行传递来说，当元素层级没有那么多的时候，会更方便些
// export default SignupForm;
export default withRouter(SignupForm);
