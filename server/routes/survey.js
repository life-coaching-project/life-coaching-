var router = require("express").Router();
var express = require("express");
var Check = require("../models/survey.js");
router.get("/getthequestion", Check.gettingTheSurveyQuestion);
module.exports = router;
