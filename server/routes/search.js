var express = require('express');
var path = require('path');
var router = express.Router();

var Food = require('../models/food');

router.post('/', function(req, res) {
    console.log(req.body);
    Food.find({
            food_type: req.body.food_type
        })
        .then(function(result) {
            res.send(result);
        })
        .catch(function(err) {
            console.log('error:', err);
        });
}); //end router.post

module.exports = router;
