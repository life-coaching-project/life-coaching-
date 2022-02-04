const mongoose = require("mongoose");


const itemSchema = new mongoose.Schema({
    title: String,
    text: String,
    Image:String,
    createdAt: { type : Date, default: Date.now }
  });


  const Item = mongoose.model("Item", itemSchema);

 var selectAll = function(callback) {
    Item.find({}, function(err, items) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, items);
      }
    });
  };

 var create = function(data, callback) {
    Item.create(data, function(err, items) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, items);
      }
    });
  };
  
 var findOneAndDelete = function (id, callback) {
    Item.findByIdAndDelete(id, function(err, data){
      if(err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }
  
  module.exports = { Item , create , findOneAndDelete ,selectAll }

