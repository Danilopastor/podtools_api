const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    nome: String,
    lastName: String,
    nickname: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    },
    level: Number,
},
{
	timestamps: true,
});

module.exports = mongoose.model('users', PostSchema);