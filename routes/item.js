var fs = require('fs');
var File = require('../models/file');

global.post_createItem  = function(req,res,next) {
   var newFile = new File();
   console.log(req.body);
   newFile.filename = req.filename;
   fs.mkdir("./files/" + req.session.passport.user, function(err){console.log(err)});
   newFile.location = req.location;
   newFile.copies = req.copies;
   newFile.save(function(err) {
        if (err){
            console.log('Error in Saving file: '+err);
            throw err;
        }
        console.log('File Registration succesful');
    });
};
global.post_updateItem  = function(req,res,next) {
  console.log(req.body);
};
global.post_deleteItem = function(req,res,next) {

};
global.post_download = function(req,res,next) {

};
global.post_release = function(req,res,next) {

};

global.get_searchItems = function(req, res) {
    console.log("searchItems");


};
