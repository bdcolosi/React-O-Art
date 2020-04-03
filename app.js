const createError = require('http-errors');
express = require('express'),
path = require('path'),
cookieParser = require('cookie-parser'),
logger = require('morgan');

const indexRouter = require('./routes/index'),
 imagesRouter = require('./routes/images'),
 commentsRouter = require('./routes/comments');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/images', imagesRouter);
app.use('/comments', commentsRouter);



module.exports = app;
