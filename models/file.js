var mongoose = require("mongoose");

var FileSchema = new mongoose.Schema({
documentname: String,  
  filename: String,
  owner: String,
  location: String,
  description: String,
  copies: Number,
  group: String
})

FileSchema.methods.decrement = function(cb){
	console.log("Decrementing");
	console.log(this);
	this.copies -= 1;
	console.log(this);
	this.save(cb);
}

module.exports = mongoose.model('File', FileSchema);
