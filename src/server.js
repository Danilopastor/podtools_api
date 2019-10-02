const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');


const server = express();

mongoose.connect('mongodb+srv://podtools:X5umSigLK0MvKrvR@podtools-0llub.mongodb.net/test?retryWrites=true&w=majority',{
	useCreateIndex: true,
	useNewUrlParser: true,
});

server.use(cors());
server.use(express.json());
server.use(routes);

require('./controlers/admin')(server);

server.listen(3333);