var express = require("express");

var apiv1 = express.Router();

apiv1.get("/", function (req, res) {
  res.send("Coming Soon!");
});

module.exports = apiv1;
