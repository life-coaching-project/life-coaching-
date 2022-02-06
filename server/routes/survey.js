var router = require("express").Router();
var express = require("express");
var Check = require("../models/survey.js");
var feedback = require("../models/survey.js");
router.get("/getthequestion", Check.gettingTheSurveyQuestion);
router.get("/getthefeedback", feedback.gettingTheSurveyFeedback);

module.exports = router;
