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
  console.log(req.params.id);
  User.findByIdAndDelete(req.params.id)
    .then(user => {
      if (!user) {
        next(createError(404))
      } else {
        res.redirect('/users');
      }
    })
    .catch(error => next(error));
}
