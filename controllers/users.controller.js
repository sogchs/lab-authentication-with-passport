const createError = require('http-errors');
const User = require('../models/user.model');

module.exports.profile = (req, res, next) => {
  res.render('users/profile');
}

module.exports.list = (req, res, next) => {
  User.find()
    .then(users => {
      res.render('users/list', {
        users: users
      });
    })
    .catch(error => next(error));
}

module.exports.delete = (req, res, next) => {
  User.findByIdAndDelete(req.params.id); //puede ser que tenga que cambiar lo que se requiera aqui
  .then (()=> res.redirect('/login'))
}
