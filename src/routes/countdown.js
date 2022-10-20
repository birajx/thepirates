const config = require("../../settings");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("pages/countdown", {
    title: config.web.pages.countdown.title,
    description: config.web.pages.countdown.description
  });
});

module.exports = router;