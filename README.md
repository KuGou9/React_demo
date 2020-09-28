<<<<<<< HEAD
# 效果图在public的finalImage文件夹内

# 技术点
## 1. 采用了React框架搭建项目，样式上在index.html文件中通过bootsCDN引入了bootstrap4.5的link，使整体样式更为美观，同时因为在不同的情况下会有不一样的样式，所以采用了第三方库classnames进行样式的动态生成
## 2. 结合了React-Router进行路由跳转，采用React-Redux、Redux进行了数据的共享
## 3. 使用高阶组件对页面访问进行了限制（高阶组件：通过传入一个组件来对这个组件需要满足的情况进行判断之后再进行展示）
## 4. 使用了LocalStroge进行登录信息的存储，以此来解决页面刷新后redux中的数据丢失的问题
## 5. 结合express搭建了一个简易服务器来对登录的信息做一个判断，在使用axios请求接口的数据的时候将数据传送保存。由于使用post请求的传参问题，使用了第三方插件body-parser
## 6. 使用第三方库lodash、validator对服务器后端的数据进行一个判断
## 7. 在搭建的后端服务器通讯时的跨域问题，采用了第三方插件http-proxy-middleware进行了配置

=======
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
>>>>>>> 82b6d3d... Initialize project using Create React App
