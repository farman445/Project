var express = require('express');
var router = express.Router();
var Course = require("../models/course");

router.get('/', function(req, res, next) {
	res.render("home");
});


router.get('/signIN', async function(req, res, next) {
	res.render("account/signIN");
  });
  
  router.get('/signUP', async function(req, res, next) {
	res.render("account/signUP");
  });

module.exports = router;
