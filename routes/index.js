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
        res.sendfile('views/home.html');
    });

    /*Handle Login POST */
    router.post('/login', post_login(passport));

    /* GET signup page. */
    router.get('/signup', get_signup);

    /* Handle Registration POST */
    router.post('/signup', post_signup(passport));

    /* GET login page. */
    router.get('/login', get_login);

    /* Handle Logout */
    router.get('/signout', get_signout);
     
    router.get('/searchItems', get_searchItems);
    
    return router;
}








