var EbDTO = require('../dto/eb.dto');

var db = require('../models');

var ebService = {
    getAll : async() => {
        return await db.Eb.findAll();
    },
    getById : async(id) => {
        console.log(" EB ID : ", id);
        const eb = await db.Eb.findByPk(id); 
        console.log(eb);
        return eb ? new EbDTO(eb) : null; 
    }
    
}

module.exports = ebService;