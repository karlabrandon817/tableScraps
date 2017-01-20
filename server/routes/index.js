var express = require('express');
var path = require('path');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res) {
    var indexPath = path.join(__dirname, '../../public/views/index.html');
    res.sendFile(indexPath);
}); //end router.get

router.post('/', passport.authenticate('local'), function(req, res) {
    res.sendStatus(200);
}); //end router.post

module.exports = router;
