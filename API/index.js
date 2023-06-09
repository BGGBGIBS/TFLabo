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

if (process.env.NODE_ENV === 'development') {
    // db.sequelize.sync({ force : true }); 
    // ↑ Force comme un bourrin, supprime les tables et recréer tout à chaque sync
    // db.sequelize.sync({ alter : { drop : false} });
    // ↑ Regared l'état actuel de la db, ajoute ce qui peut être ajouté, modifie les colonnes, suppression de colonnes et/ou tables interdite
    //db.User.sync({ alter : { drop : false }}); // ← Pour synchroniser juste un model
}

app.use(express.json());
app.use(express.static('public'));

var router = require('./routes');
app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log(`Server API started on port:${process.env.PORT}`);
})