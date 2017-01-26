
var express = require('express');
var router = express.Router();
var path = require('path');
var DogSchema = require('../models/user');

router.post('/', function(req, res) {
    console.log(req.body);
    var sentDog = req.body;

    DogSchema.create(sentDog, function(err, response) {
        if (err) {
          console.log('create error', err);
          res.sendStatus(500);
            //next(err);
        } else {
            res.status(201).send({
                message: 'new dog profile created'
            });
        }
    }); //end DogSchema.create
}); //end router.post




router.get('/', function(req, res) {
    console.log('finding in get', req.user);
    DogSchema.find({
            username: req.user.username
        })
        .then(function(result) {
            res.send(result);
        })
        .catch(function(err) {
            console.log('error:', err);
        }); //end DogSchema.find
}); //end router.get

module.exports = router;
