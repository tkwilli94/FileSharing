var mongoose = require("mongoose");

module.exports = mongoose.model('File',{
  filename: String,
  location: String,
  copies: Integer
});