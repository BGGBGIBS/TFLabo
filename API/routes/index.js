var router = require('express').Router();

var customerRouter = require('./customer.router');
var libraryRouter = require('./library.router');
var bookRouter = require('./book.router');
var authorRouter = require('./author.router');
var publisherRouter = require('./publisher.router');
var basketRouter = require('./basket.router');
var elRouter = require('./el.router');
var ebRouter = require('./eb.router');
var authRouter = require('./auth.router');



router.use('/customer', customerRouter);
router.use('/library', libraryRouter);
router.use('/book', bookRouter);
router.use('/author', authorRouter);
router.use('/publisher', publisherRouter);
router.use('/basket', basketRouter);
router.use('/el', elRouter);
router.use('/eb', ebRouter);
router.use('/auth', authRouter);

module.exports = router;