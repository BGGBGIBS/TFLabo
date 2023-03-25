var ElDTO = require('../dto/el.dto');

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
    }
    
}

module.exports = elService;