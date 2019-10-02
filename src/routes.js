const express = require('express');
const Login   = require('./controlers/login/login');
const Signin   = require('./controlers/login/signin');

const routes = express.Router();

routes.post('/login',Login.index);

routes.post('/signin', Signin.create);
routes.post('/signin/verify', Signin.verify);
routes.post('/signin/recovery',Signin.requestcode);
routes.get('/signin/recovery/:requestpass',Signin.recoveryVerify);
routes.post('/signin/recovery/:requestpass',Signin.recovery);

module.exports = routes;