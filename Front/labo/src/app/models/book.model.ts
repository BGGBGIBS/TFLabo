export interface Book {
    book_id: number;
    book_title: string;
    book_year: Date;
    book_price: number;
    book_category: string;
  }

  export interface BookArray{
    results : Book[];
    statusCode: number;
  }
  