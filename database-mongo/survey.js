const db = require("../server/models/survey.js");

const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost/test";

mongoose.connect(
  mongoUri,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("db connected");
  }
);

var questions = [
  {
    question:
      "do you have a love partner(coaches don't play never be shy of saying no)",
    option1: "I currently do not have a girlfriend",
    option2: "I do not have a girlfriend",
    option3: "It is complicated",
    option4:
      "I never had and I'm somehow unable of getting into a relationship",
  },
  {
    question:
      "how is your current emotional status affecting your emotions(for both singles and engaged)?",
    option1: "It is going as smooth as i want it to be",
    option2: "It has its ups and downs",
    option3: "It was great at first then it went down the hill",
    option4: "I want a way out of this",
  },
  {
    question:
      "did you have excessive self consciousness about this particular side of your life?",
    option1: "I do not",
    option2: "I do but no one is born perfect so not a toll",
    option3: "sometimes i wonder if i'm doing everything the wrong way",
    option4:
      "Yes I realize that all the time to the point of feeling helpless  ",
  },
  {
    question: "on scale from 1 to 10 , how much of party addict you are?",
    option1: "zero, I don't stand noises and people",
    option2:
      "three, I go at specific occasions that mostly require my presence",
    option3: "seven , you can say I like me some parties from time to time",
    option4: "ten, i'm a party freak :D",
  },
  {
    question:
      "when present at a social group, how much of contributor are in their conversation? ",
    option1: "I don't",
    option2: "I'm a listener so usually just when responding to someone",
    option3: "I do occaionally when i'm well informed on the subject",
    option4: "I'm talker so mostly i'm the center of every table ",
  },
  {
    question:
      "did you have excessive self consciousness about this particular side of your life?",
    option1: "I do not",
    option2: "I do but no one is born perfect so not a toll",
    option3: "sometimes i wonder if i'm doing everything the wrong way",
    option4: "Yes I realize that all the time to the point of feeling helpless",
  },
  {
    question: "do you suffer from  any chronic desease(s)?",
    option1: "yes, and it is an uncurable organic sickness",
    option2: "yes , and it is just chronic but curable with time",
    option3: "no but sedentary lifestyle have caused me a fragile body",
    option4: "no and I'm ,on the contrary, on the peak of my physical youth",
  },
  {
    question: "what is you height weight ratio(BMI)?",
    option1: "Underweight = <18.5",
    option2: "Normal weight = 18.5–24.9",
    option3: "Overweight = 25–29.9",
    option4: "Obesity = BMI of 30 or greater",
  },
  {
    question:
      "did you have excessive self consciousness about this particular side of your life?",
    option1: "I do not",
    option2: "I do but no one is born perfect so not a toll",
    option3: "sometimes i wonder if i'm doing everything the wrong way",
    option4: "Yes I realize that all the time to the point of feeling helpless",
  },
  {
    question: "are you currently in your dream career? ",
    option1: "yes and I'm enjoying my work ",
    option2: "no but it in the same road ",
    option3: "I'm not and yet still hoping I can turn the table",
    option4: "i'm far from my career dream ",
  },
  {
    question:
      "o you suffer from any kind of fallacies that are stopping you from giving your best performance? ",
    option1: "nope! I'm a workoholic and i'm loving it ",
    option2:
      "kind of , but mostly at some accuring circomstances not on a regular basis",
    option3: "i'm motivated for my work I just lack keeping up with the pace ",
    option4:
      "I lack every inch of desire for the career that I'm currently at.",
  },
  {
    question:
      "did you have excessive self consciousness about this particular side of your life?",
    option1: " I do not",
    option2: "I do but no one is born perfect so not a toll",
    option3: "sometimes i wonder if i'm doing everything the wrong way",
    option4: "Yes I realize that all the time to the point of feeling helpless",
  },
];
var feedbacks = [
  {
    thefeedback:
      "thank you for filling our survey seriously; it appears to us after carefully reviewing your answers that more attentivness is needed for the emotional aspect of your life which is why due  to our review more emotional life articles will be at your feed disposal and in time your life will get everything in place , we care for you <3 ",
  },
  {
    thefeedback:
      "thank you for filling our survey seriously; it appears to us after carefully reviewing your answers that more attentivness is needed for the social aspect of your life which is why due  to our review more social life articles will be at your feed disposal and in time your life will get everything in place, we care for you <3",
  },
  {
    thefeedback:
      "thank you for filling our survey seriously; it appears to us after carefully reviewing your answers that more attentivness is needed for the physical aspect of your life which is why due  to our review more emotional life articles will be at your feed disposal and in time your life will get everything in place, we care for you <3",
  },
  {
    thefeedback:
      "thank you for filling our survey seriously; it appears to us after carefully reviewing your answers that more attentivness is needed for the career aspect of your life which is why due  to our review more emotional life articles will be at your feed disposal and in time your life will get everything in place, we care for you <3",
  },
];

// for (var i = 0; i < feedbacks.length; i++) {}
// const insert = () => db.feedback.insertMany(feedbacks);
// insert();

// for (var i = 0; i < questions.length; i++) {
// }
// const insert = () => db.Check.insertMany(questions);
// insert();
module.exports.questions = questions;
module.exports.feedbacks = feedbacks;
