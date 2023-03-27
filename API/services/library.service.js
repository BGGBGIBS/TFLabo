var LibraryDTO = require('../dto/library.dto');

const { sequelize } = require('../models');
var db = require('../models');


var LibraryService = {
    getAll : async(offset, limit) => {
        const { rows, count } = await db.Library.findAndCountAll({
            distinct : true,
            offset : offset,
            limit : limit
        });
        return {
            librarys : rows.map(library => new LibraryDTO(library)),
            count
        } 
    },
    getById : async(id) => {
        console.log(id);
        const library = await db.Library.findByPk(id); 
        console.log(library);
        return library ? new LibraryDTO(library) : null; 
    },
    create : async(toAdd) => {
        var library = await db.Library.create(toAdd);
        return library ? new LibraryDTO(library) : null;
    }
}

module.exports = LibraryService;