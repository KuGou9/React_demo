import React from 'react';
import FlashMessage from './FlashMessage';
// 关联redux
import { connect } from 'react-redux';

// 这样引入的优点就是可以直接饮用
import { deleteFlashMessage } from '../../action/flashMessage';

class FlashMessageList extends React.Component {
  // message是一个数组！！！
  render() {
    // 这里如果加了大括号那么就要加return
    const message = this.props.message.map((message) => {
      return (
        <FlashMessage
          key={message.id}
          message={message}
          deleteFlashMessage={this.props.deleteFlashMessage}
        />
      );
    });
    return <div className="container">{message}</div>;
  }
}

const mapStateTpProps = (state) => {
  return {
    message: state.flashMessage,
  };
};
export default connect(mapStateTpProps, { deleteFlashMessage })(
  FlashMessageList
);
