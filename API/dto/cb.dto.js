// cb.dto.js
module.exports = class CbDTO {
    constructor(id, bookCount, bookId, basketId) {
      this.id = id;
      this.bookCount = bookCount;
      this.bookId = bookId;
      this.basketId = basketId;
    }
  };
  