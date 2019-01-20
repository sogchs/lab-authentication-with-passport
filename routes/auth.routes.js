const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const secure = require('../middlewares/secure.mid');
const usersController = require('../controllers/users.controller');

router.get('/index', authController.index);
router.get('/login', authController.login);
router.post('/login', authController.doLogin);

router.get('/register', authController.register);
router.post('/register', authController.doRegister);

router.get('/logout', authController.logout);
router.get('/profile', secure.isAuthenticated, usersController.profile);

module.exports = router;
