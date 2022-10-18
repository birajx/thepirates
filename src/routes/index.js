var express = require('express');
const config = require("../../settings");
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("pages/home", {
    title: config.web.pages.home.title,
    description: config.web.pages.home.description
  });
});

module.exports = router;