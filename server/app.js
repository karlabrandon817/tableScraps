var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//require routers
var indexRouter = require('./routes/index');

//middleware
app.use(bodyParser.json());
app.use(express.static('public'));


//passport

//routers
app.use('/', indexRouter);

// server port set and listen
var serverPort = process.env.port || 3000;
app.set('port', serverPort);

var server = app.listen(serverPort, function() {
  console.log('up and listening on', server.address().port);
});
