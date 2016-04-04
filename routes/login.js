global.post_login = function(passport) {
  return  passport.authenticate('login', {
        successRedirect: res.redirect('/'),
        failureRedirect: res.redirect('/login')
    });
};

global.get_signup = function(req,res) {
 res.sendfile('views/signup.html');
};
global.post_signup = function(passport) {
  return passport.authenticate('signup', {
        successRedirect: res.redirect('/'),
        failureRedirect: res.redirect('/signup')
    });
};

global.get_login = function(req,res,next) {
   res.sendfile('views/login.html');


};

global.get_signout = function(req, res) {
        req.logout();
        res.redirect('/');
    };



console.log('login included.');
