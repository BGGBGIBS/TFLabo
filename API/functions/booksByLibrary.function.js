const Library = require('../models').Library;
const Book = require('../models').Book;
const Warehouse = require('../models').Warehouse;

// Afficher les livres disponibles pour une bibliothèque donnée
var inventorySP = {
    getAvailableBooksByLibrary : async (libraryId) => {
  try {
    const library = await Library.findOne({
      where: { name: libraryId },
      include: [
        {
          model: Warehouse,
          attributes: ['warehouse_name'],
          through: { attributes: [] },
          where: { bw: { count: { [Op.gt]: 0 } } }
        },
        {
          model: Book,
          attributes: ['book_title', 'book_isbn']
        }
      ]
    });
    if (!library) {
        console.log('Error undefined.');
      throw new Error('La bibliothèque spécifiée n\'existe pas.');
    }
    console.log(library);
    return library.books;
  } catch (error) {
    throw error;
  }
}
}

module.exports = inventorySP;
