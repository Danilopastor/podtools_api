const express = require('express');
const cors = require('cors');
const Private = require('../validate');

const routes = express.Router();

routes.get('/', cors(), ( req , res ) => {
    const Logged = req.user;
    return res.json({Logged,message:true});
});

module.exports = server => server.use('/admin',Private,routes);