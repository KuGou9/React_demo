import React from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from '../action/flashMessage';
import { withRouter } from 'react-router-dom';

export default function (ComposeComponnet) {
  class Authenticate extends React.Component {
    componentWillMount() {
      console.log(this.props.isAuthenticated);
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          // 这里根据原本的数据进行一个传值
          type: 'fail',
          text: '请先登录',
        });
        this.props.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      console.log(nextProps);
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/login');
      }
    }

    render() {
      return <ComposeComponnet {...this.props}></ComposeComponnet>;
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.login.isAuthenticated,
    };
  };

  return withRouter(
    connect(mapStateToProps, { addFlashMessage })(Authenticate)
  );
}
