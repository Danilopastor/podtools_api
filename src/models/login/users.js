const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

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
    },
    level: Number,
    requestPass: {
        type: Number,
        select: false
    },
},
{
	timestamps: true,
},
);
PostSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(5, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  });
  
PostSchema.methods.verificaSenha = function(password, next) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
      if (err) return next(err);
      next(isMatch);
    });
  };


module.exports = mongoose.model('users', PostSchema);