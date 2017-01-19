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

router.put('/', function(req, res){
  console.log(req.body);
  DogSchema.update({_id: req.body.dogId}, {pet_likes: [req.body.foodId]}, function(err, response){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('hi ------->', response);
      res.sendStatus(200);
    }
  });
});

module.exports = router;
