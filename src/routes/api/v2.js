var express = require("express");

var apiv2 = express.Router();

apiv2.get('/', function(req, res) {
  res.send('V2 is not released yet!');
});

module.exports = apiv2;
