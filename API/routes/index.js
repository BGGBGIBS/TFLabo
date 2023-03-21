var router = require('express').Router();

var customerRouter = require('./customer.router');
var libraryRouter = require('./library.router');
var bookRouter = require('./book.router');
var baRouter = require('./ba.router');
var authorRouter = require('./author.router');
var publisherRouter = require('./publisher.router');
var basketRouter = require('./basket.router');
var elRouter = require('./el.router');
var ebRouter = require('./eb.router');
// var inventoryRouter = require('./inventory.router');



router.use('/customer', customerRouter);
router.use('/library', libraryRouter);
router.use('/ba', baRouter);
router.use('/book', bookRouter);
router.use('/author', authorRouter);
router.use('/publisher', publisherRouter);
router.use('/basket', basketRouter);
router.use('/el', elRouter);
router.use('/eb', ebRouter);
// router.use('/inventory', inventoryRouter);

module.exports = router;