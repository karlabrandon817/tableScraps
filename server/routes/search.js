var express = require('express');
var path = require('path');
var router = express.Router();

var Food = require('../models/food');

router.post('/', function(req, res) {
    console.log(req.body);
    Food.findOne({
            food_type: {$regex: req.body.food_type}
        })
        .then(function(result) {
          if (result === null){
            res.sendStatus(500);
          }else{
              res.send(result);
          }
        })
        .catch(function(err) {
            console.log('error:', err);
        });
}); //end router.post

module.exports = router;
