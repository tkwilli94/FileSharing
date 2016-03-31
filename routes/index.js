var express = require('express');
var router = express.Router();

var isLoggedin = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.sendfile('views/index.html');
}

module.exports = function(passport) {

    /* GET home page. */
    router.get('/', isLoggedin, function(req, res) {
        res.sendfile('views/index.html');
    });

    /*Handle Login POST */
    router.post('login', passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/'
    }));

    /* GET signup page. */
    router.get('/signup', function(req, res) {
        res.sendfile('views/signup.html');
    });

    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/signup'
    }));

    /* GET login page. */
    router.get('/login', function(req, res, next) {
        res.sendfile('views/login.html');
    });

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;
}








