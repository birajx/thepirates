var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("pages/dl", {
    title: config.web.pages.dl.title,
    description: config.web.pages.dl.description
  });
});

router.get('/github', function(req, res, next) {
   res.redirect('https://github.com');
}
)

module.exports = router;