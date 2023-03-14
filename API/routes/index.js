var router = require('express').Router();

var customerRouter = require('./customer.router');
var warehouseRouter = require('./warehouse.router');
var bookRouter = require('./book.router');
var bapRouter = require('./bap.router');
var authorRouter = require('./author.router');
var publisherRouter = require('./publisher.router');
var basketRouter = require('./basket.router');
var bwRouter = require('./bw.router');
var cbRouter = require('./cb.router');



router.use('/customer', customerRouter);
router.use('/warehouse', warehouseRouter);
router.use('/bap', bapRouter);
router.use('/book', bookRouter);
router.use('/author', authorRouter);
router.use('/publisher', publisherRouter);
router.use('/basket', basketRouter);
router.use('/bw', bwRouter);
router.use('/cb', cbRouter);

module.exports = router;