var inventoryDTO = require('../dto/inventory.dto');
const { sequelize } = require('../models');

var db = require('../models');

var inventoryService = {
    getByWarehouse : async(libraryId) => {
        return await sequelize.query('EXEC dbo.GetinventorysInLibrary @libraryId = :libraryId', {
            replacements: { libraryId },
            type: Sequelize.QueryTypes.SELECT
        });
    }
}

module.exports = inventoryService;