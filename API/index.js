require('dotenv').config();

var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
require('express-async-errors');
var db = require('./models');
db.sequelize.authenticate()
.then(() => console.log('Connection DB successfull'))
.catch((err) => console.log('Connection DB failed : ', err))

app.use(express.json());
app.use(express.static('public'));

var router = require('./routes');
app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log(`Server API started on port:${process.env.PORT}`);
})