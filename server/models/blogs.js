const mongoose = require("mongoose");


const itemSchema = new mongoose.Schema({
    title: String,
    text: String,
    Image:String,
    createdAt: String
  });


  const Blog = mongoose.model("Blog", itemSchema);

 var selectAll = function(callback) {
   Blog.find({}, function(err, items) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, items);
      }
    });
  };

 var create = function(data, callback) {
    Blog.create(data, function(err, items) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, items);
      }
    });
  };
  
 var findOneAndDelete = function (id, callback) {
    Blog.findByIdAndDelete(id, function(err, data){
      if(err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }
  
  module.exports = { Blog , create , findOneAndDelete ,selectAll }

