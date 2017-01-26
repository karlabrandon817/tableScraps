var express = require('express');
var router = express.Router();
var path = require('path');
var DogSchema = require('../models/user');

router.put('/', function(req, res) {
    console.log(req.body);
    DogSchema.update({
            username: req.user.username
        }, {$pull: {
            pet_dislikes: {$in: [req.body.food_info]}}
        })
        .then(function(result){
          res.send(result);
        })
        .catch(function(err){
          console.log('error', err);
        });
}); //end router.delete

module.exports = router;
