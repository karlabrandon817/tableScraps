var express = require('express');
var router = express.Router();
var path = require('path');
var DogSchema = require('../models/user');



router.put('/', function(req, res){
  console.log('received from like click:', req.body);
  DogSchema.update({username: req.body.username}, {$push: {pet_dislikes: req.body.food_info.food_type}}, function(err, response){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('hi ------->', response);
      res.sendStatus(200);
    }
  });//end DogSchema.update
});//end router.put

router.get('/', function(req, res){
  console.log('finding in get', req.user);
  DogSchema.find({username: req.user.username})
  .then(function(result){
    res.send(result);
  })
  .catch(function(err){
    console.log('error:', err);
  });//end DogSchema.find
});//end router.get


module.exports = router;
