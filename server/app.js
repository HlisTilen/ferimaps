var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var prostoriRouter = require('./routes/prostori');
var zaposleniRouter = require('./routes/zaposleni');
var serverConfig = require('./config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/prostori', prostoriRouter);
app.use('/zaposleni', zaposleniRouter);

mongoose.Promise = Promise;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(serverConfig.mongoURL, { useNewUrlParser: true }, (error) => {
    if (error) {
      console.error('MongoDB error!');
      throw error;
    }
  });
}

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

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`running on port: ${serverConfig.port}`);
  }
});

module.exports = app;
