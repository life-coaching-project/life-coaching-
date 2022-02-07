const mongoose = require("mongoose");
var LifeCheckSchema = mongoose.Schema({
  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
});
var Check = mongoose.model("Check", LifeCheckSchema);
var gettingTheSurveyQuestion = async (req, res) => {
  try {
    let questions = await Check.find();
    // console.log(questions);
    res.send(questions);
  } catch (error) {
    res.send(error);
  }
};

var insertthequestion = function (website, callback) {
  // var item = new Item(website);
  Check.create(website, (err, items) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};
module.exports = { Check, gettingTheSurveyQuestion, insertthequestion };
