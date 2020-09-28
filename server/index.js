const express = require('express');
const app = express();

// 各种借口
// 使用from的话需要额外配置
const user = require('./routes/user');
const login = require('./routes/login');

const debug = require('debug')('my-application');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api/users', user);
app.use('/api/login', login);

// 这里要保持端口一致
app.listen(3030, (req, res) => {
  // 引用debug之后运行命令变成nodemon index.js
  debug('服务器运行在3030端口');
});
