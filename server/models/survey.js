const mongoose = require("mongoose");
var LifeCheckSchema = mongoose.Schema({
  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
});
var feedbackSchema = mongoose.Schema({
  thefeedback: String,
});
var Check = mongoose.model("Check", LifeCheckSchema);
var feedback = mongoose.model("feedback", feedbackSchema);
var gettingTheSurveyQuestion = async (req, res) => {
  try {
    let questions = await Check.find();
    // console.log(questions);
    res.send(questions);
  } catch (error) {
    res.send(error);
  }
};
var gettingTheSurveyFeedback = async (req, res) => {
  try {
    let feedbacks = await feedback.find();
    res.send(feedbacks);
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
module.exports = {
  Check,
  gettingTheSurveyQuestion,
  insertthequestion,
  gettingTheSurveyFeedback,
  feedback,
};
