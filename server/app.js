var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('./strategies/userStrategy');

//require routers
var indexRouter = require('./routes/index');
var foodRouter = require('./routes/addFood');
var registerRouter = require('./routes/register');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
    secret: 'secret',
    key: 'user',
    resave: 'true',
    saveUninitialized: false,
    cookie: {
        maxage: 100000,
        secure: false
    }
}));

//passport
app.use(passport.initialize());
app.use(passport.session());

//routers
app.use('/', indexRouter);
app.use('/addFood', foodRouter);
app.use('/register', registerRouter);

// server port set and listen
var serverPort = process.env.port || 3131;
app.set('port', serverPort);

var server = app.listen(serverPort, function() {
    console.log('up and listening on', server.address().port);
});

//mongodb connection
var mongoURI = "mongodb://localhost:27017/tableScrapsDb";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function() {
    console.log('mongodb connection open!');
});
