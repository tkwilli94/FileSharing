var mongoose = require("mongoose");

module.exports = mongoose.model('File',{
  filename: String,
  owner: String,
  location: String,
  description: String,
  copies: Number,
  group: String
});
