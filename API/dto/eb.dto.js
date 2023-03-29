// Eb.dto.js
module.exports = class EbDTO {
    constructor({id, editionCount, editionId, basketId}) {
      this.id = id;
      this.editionCount = editionCount;
      this.editionId = editionId;
      this.basketId = basketId;
    }
  };
  