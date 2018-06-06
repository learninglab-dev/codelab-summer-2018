var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var modules = [];
  res.render('index', { title: 'LL Code Tutorials', subtitle: 'Select a module below to begin.', data: modules });
});

module.exports = router;
