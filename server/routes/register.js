var express = require('express');
var router = express.Router();
var path = require('path');
var DogSchema = require('../models/user');

router.post('/', function(req, res){
  console.log(req.body);
  var sentDog = req.body;

  DogSchema.create(sentDog, function(err, response){
    if(err){
      next(err);
    }else{
      res.status(201).send({message:'new dog profile created'});
    }
  });//end DogSchema.create
});//end router.post

module.exports = router;
