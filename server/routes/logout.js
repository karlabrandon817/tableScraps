var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res){
  req.logout();
  res.redirect('/');
  console.log('logged out');
});

module.exports= router;
