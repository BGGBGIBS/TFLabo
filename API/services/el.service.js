var ElDTO = require('../dto/el.dto');

const { sequelize } = require('../models');
var db = require('../models');

var elService = {
    getAll : async() => {
        return await db.El.findAll();
    },
    getById : async(id) => {
        console.log(id);
        const el = await db.El.findByPk(id); 
        console.log(el);
        return el ? new ElDTO(el) : null; 
    },
    create : async(toAdd) => {
        const newO = await db.El.create(toAdd);

        return newO ? new ElDTO(newO) : null;
    }
    
}

module.exports = elService;