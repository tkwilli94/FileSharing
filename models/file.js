var mongoose = require("mongoose");

module.exports = mongoose.model('File',{
  filename: String,
  path: String,
  location: String,
  copies: String
});