import React from 'react';
import SignupFrom from './SignupForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signupActions from '../../action/signUpAction';
import * as flashActions from '../../action/flashMessage';

class SignupPage extends React.Component {
  render() {
    console.log(this.props.userSignupActions);
    return (
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          {/* 因为是父元素，所以在这里进行一个提交最合适 */}
          {/* this.props.userSignupActions是传过来的userSignupRequest函数 */}
          {/* // 由 react-redux 注入的 userSignupActions */}
          <SignupFrom
            history={this.props.history}
            userSignupActions={this.props.userSignupActions}
            flashActions={this.props.flashActions}
          />
        </div>
        <div className="col-md-2"></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSignupActions: bindActionCreators(signupActions, dispatch),
    flashActions: bindActionCreators(flashActions, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(SignupPage);
