var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('./strategies/userStrategy');

//require routers
var indexRouter = require('./routes/index');
var foodRouter = require('./routes/food');
var userInfoRouter = require('./routes/userInfo');
var logoutRouter = require('./routes/logout');
var authRouter = require('./routes/auth');
var searchRouter = require('./routes/search');
var dislikeRouter = require('./routes/dislike');

var app = express();

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
})); //end app.use

//passport
app.use(passport.initialize());
app.use(passport.session());

//routers
app.use('/', indexRouter);
app.use('/food', foodRouter);
app.use('/userInfo', userInfoRouter);
app.use('/logout', logoutRouter);
app.use('/auth', authRouter);
app.use('/search', searchRouter);
app.use('/dislike', dislikeRouter);

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
