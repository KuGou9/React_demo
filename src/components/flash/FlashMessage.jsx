import React from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component {
  // 进行消息移除，那么要求action里面要有对应的删除操作
  onClick = () => {
    this.props.deleteFlashMessage(this.props.message.id);
  };
  render() {
    /**
     * type：消息的类型
     * text：要显示的文字内容
     */
    const { type, text } = this.props.message;
    return (
      <div
        className={classnames('alert', {
          'alert-success': type === 'success',
          'alert-danger': type === 'fail',
        })}
      >
        <button onClick={this.onClick} className="close">
          {/* 转义字符× */}
          &times;
        </button>
        {text}
      </div>
    );
  }
}

export default FlashMessage;
