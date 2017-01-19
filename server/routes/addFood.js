var express = require('express');
var path = require('path');
var router = express.Router();

var Food = require('../models/food');

router.post('/', function(req, res) {
    var newItem = new Food({
      food_type: req.body.food_type,
      food_pic: req.body.food_pic,
      safeToEat: req.body.safeToEat,
      benefits: req.body.benefits,
      toxicity_level: req.body.toxicity_level,
      harms: req.body.harms
    });

    Food.create(newItem)
    .then(function(result) {
      console.log(result);
      res.sendStatus(200);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



module.exports = router;
