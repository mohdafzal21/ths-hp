var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const multer = require('multer');
var methodOverride = require('method-override');
var passport              = require("passport")
var LocalStrategy         = require("passport-local")
var passportLocalMongoose = require("passport-local-mongoose")
//controllers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var challengesRouter = require('./routes/challenges');
var profileRouter = require('./routes/profile');
var taskRouter = require('./routes/task')
var companyRouter = require('./routes/company')

//

var app = express();

//passport configure
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "ast u",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// requires the model with Passport-Local Mongoose plugged in
const db = require('./models');
 
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(db.User.authenticate()));
 
// use static serialize and deserialize of model for passport session support
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

app.use(bodyParser.urlencoded({ extended:true }))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// parse application/json
app.use(bodyParser.json())


app.use(express.urlencoded({ extended:true}));
app.use(logger('dev'));
app.use(express.json());

app.use(cookieParser());
app.use(methodOverride('_method'))
app.use('/public',express.static(path.join(__dirname, 'public')));

// routes//
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profile',profileRouter);

app.use('/api/challenges/',challengesRouter);
app.use('/api/company/',companyRouter);
app.use('/api/task/',taskRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
