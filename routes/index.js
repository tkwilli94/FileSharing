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
        res.sendfile('views/upload.html');
    });

    /******LOGIN STUFF******/

    /*Handle Login POST*/
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

    /* GET signup page. */
    router.get('/signup', get_signup);

    /* Handle Registration POST */
    router.post('/signup', post_signup(passport));

    /* GET login page. */
    router.get('/login', get_login);

    /* Handle Logout */
    router.get('/signout', get_signout); 

    /*****ITEM MANAGEMENT******/
    
    router.get('/searchItems', get_searchItems);
    router.post('/createItem', post_createItem);
    router.post('/updateItem', post_updateItem);
    router.post('/deleteItem', post_deleteItem);
    router.post('/download', post_download);
    router.post('/release', post_release);
    
    /*****GROUP MANAGEMENT*****/

    router.post('/createGroup', post_createGroup);
    /* Adds a user to a group */
    router.post('/addToGroup', post_addToGroup);
    router.post('/removeFromGroup', post_removeFromGroup);
    router.post('/deleteGroup', post_deleteGroup);
    router.get('/getGroups', get_getGroups);
    

    return router;
}








