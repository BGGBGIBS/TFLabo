var AuthorDTO = require('../dto/author.dto.js');

const { sequelize } = require('../models');
var db = require('../models');

var authorService = {
    getAll : async(offset, limit) => {
        // return await db.Author.findAll();
        const { rows, count } = await db.Author.findAndCountAll({
            distinct : true,
            offset : offset, //offset : 12 ou offset : offset -> simplifé en offset
            limit : limit,
        });
        return {
            authors : rows.map(author => new AuthorDTO(author)),
            count
        } 
    },
    getById : async(id) => {
        console.log(id);
        const author = await db.Author.findByPk(id); 
        console.log(author);
        return author ? new AuthorDTO(author) : null; 
    },
    create : async(toAdd) => {
        // const newAuthor = await db.Author.create(toAdd);
        // return newAuthor ? new AuthorDTO(newAuthor) : null;

        const transaction = await db.sequelize.transaction()

        let author;
        try {
            console.log(toAdd);
            author = await db.Author.create(toAdd, { transaction });
            await author.addBooks(toAdd.books, { transaction })
            console.log(toAdd.books);
            await transaction.commit();

            console.log(author.author_id);
            const addedauthor = await db.Author.findByPk(author.author_id, {
                include: [db.Book]
            });

            return addedauthor ? new AuthorDTO(addedauthor) : null;
        }
        catch (err) {
            console.log(err);
            await transaction.rollback();
            return null;
        }
    }   
}

module.exports = authorService;