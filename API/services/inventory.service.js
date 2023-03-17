// var inventoryService = {
//     getByWarehouse : async(libraryId) => {
//         return await sequelize.query('EXEC dbo.GetinventorysInLibrary @libraryId = :libraryId', {
//             replacements: { libraryId },
//             type: Sequelize.QueryTypes.SELECT
//         });
//     }
// }

// module.exports = inventoryService;
var sp = require('../functions/booksByLibrary.function')

const inventoryService = {
    getAvailableBooks : async (libraryId) => {
      try {
        const availableBooks = await sp.getAvailableBooksByLibrary(libraryId);
        return availableBooks;
      } catch (error) {
        throw error;
      }
    },
  };
  
  module.exports = inventoryService;
  