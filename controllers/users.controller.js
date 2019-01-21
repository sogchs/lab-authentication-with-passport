const createError = require('http-errors');
const User = require('../models/user.model');
const mongoose = require('mongoose');


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
  User.findByIdAndDelete(req.params.id) 
  //aqui necesito una condicion por la que si me borro al usuario con el que me logeo haga redirect a index
  .then(user => {
    if(!user){
      next(createError(404));
    } else if(req.user.id === user.id){
      res.redirect('/logout');
    } else {
      res.redirect('users/list')
    }
})
  
  .catch(error => next(error));
}
