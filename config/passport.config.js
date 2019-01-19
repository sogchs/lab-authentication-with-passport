const User = require('../models/user.model');
const LocalStrategy = require('passport-local').Strategy;

module.exports.setup = (passport) => {

    /**
     * Write user id at the session cookie
     */
    passport.serializeUser((user, next) => {});

    /**
     * Read user from the session cookie
     */
    passport.deserializeUser((id, next) => {});

    passport.use('local-auth', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, (email, password, next) => {
        // TODO: passport local strategy
    }));
}
