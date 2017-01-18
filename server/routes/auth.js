var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res){
  if(req.isAuthenticated()){
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
