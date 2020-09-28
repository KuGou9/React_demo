const express = require('express');
const isEmpty = require('lodash/isEmpty');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const config = require('../config');

const router = express.Router();

const validInput = (data) => {
  let error = {};
  if (validator.isEmpty(data.username)) {
    error.username = '请输入用户名';
  }
  if (validator.isEmpty(data.password)) {
    error.password = '请输入密码';
  }
  if (!validator.equals(data.username, '12')) {
    error.username = '该用户不存在';
  }
  if (!validator.equals(data.password, '12')) {
    error.password = '密码错误';
  }
  return {
    error,
    isValid: isEmpty(error),
  };
};

router.post('/', (req, res) => {
  const { error, isValid } = validInput(req.body);
  if (isValid) {
    const token = jwt.sign(
      {
        id: 123,
        username: '456',
      },
      config.jwtSecret
    );
    res.send(token);
    // res.send({
    //   success: true,
    // });
  } else {
    res.status(400).json(error);
  }
});

module.exports = router;
