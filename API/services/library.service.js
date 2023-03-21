var LibraryDTO = require('../dto/library.dto');

var db = require('../models');

var LibraryService = {
    getAll : async() => {
        return await db.Library.findAll();
    },
    getById : async(id) => {
        return await db.Library.findByPk(id);
    },
    create : async(toAdd) => {
        var Library = await db.Library.create(toAdd);
        return Library ? new LibraryDTO(Library) : null;
    }
}

module.exports = LibraryService;