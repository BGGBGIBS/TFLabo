var EbDTO = require('../dto/eb.dto');

const { sequelize } = require('../models');
var db = require('../models');


var ebService = {
    getAll : async(offset, limit) => {
        const { rows, count } = await db.Eb.findAndCountAll({
            distinct : true,
            offset : offset,
            limit : limit,
        });
        return {
            ebs : rows.map(eb => new EbDTO(eb)),
            count
        }     },
    getById : async(id) => {
        console.log(" EB ID : ", id);
        const eb = await db.Eb.findByPk(id); 
        console.log(eb);
        return eb ? new EbDTO(eb) : null; 
    },
    create : async(toAdd) => {
        
        const transaction = await db.sequelize.transaction()

        let book;
        try {
            console.log(toAdd);
            book = await db.Book.create(toAdd, { transaction });
            await book.addAuthors(toAdd.authors, { transaction })

            await transaction.commit();

            console.log(book.book_id);
            const addedbook = await db.Book.findByPk(book.book_id, {
                include: [Author]
            });

            return addedbook ? new BookDTO(addedbook) : null;
        }
        catch (err) {
            console.log(err);
            await transaction.rollback();
            return null;
        }
    }
    
}

module.exports = ebService;