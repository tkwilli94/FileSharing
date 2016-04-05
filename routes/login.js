global.post_login = function(passport) {
  return  passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/login'
    });
};

global.get_signup = function(req,res) {
 res.sendfile('views/signup.html');
};
global.post_signup = function(passport) {
  return passport.authenticate('signup', {
        failureRedirect: '/signup'
    });
};

global.post_signup_redirect = function(req, res){
  res.redirect('/');
}

global.get_login = function(req,res,next) {
   res.sendfile('views/login.html');
};

global.get_signout = function(req, res) {
        req.logout();
        res.redirect('/');
    };



