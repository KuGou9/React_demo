const express = require('express');
// 验证是否为空
const isEmpty = require('lodash/isEmpty');
const validator = require('validator');

const router = express.Router();

const validatorInput = (data) => {
  let error = {};
  if (validator.isEmpty(data.username)) {
    error.username = '请填写用户名';
  }
  if (!validator.isEmail(data.email)) {
    error.email = '请添加邮箱';
  }
  if (validator.isEmpty(data.password)) {
    error.password = '请填写密码';
  }
  if (validator.isEmpty(data.passwordConfirm)) {
    error.passwordConfirm = '请确认密码';
  }
  if (!validator.equals(data.password, data.passwordConfirm)) {
    error.passwordConfirm = '两次密码不相同';
  }

  return {
    error,
    isVaild: isEmpty(error),
  };
};

// 因为前台是post
router.post('/', (req, res) => {
  const { error, isVaild } = validatorInput(req.body);
  if (isVaild) {
    res.send({ success: true });
  } else {
    res.status(400).json(error);
  }
  // res.send({
  //   msg: 'hello express',
  // });
});

module.exports = router;
