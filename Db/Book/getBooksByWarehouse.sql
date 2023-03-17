CREATE PROCEDURE dbo.GetBooksInLibrary
    @libraryId INT
AS
BEGIN
    SELECT b.book_id, b.book_title, b.book_year, b.book_price, b.book_category
    FROM book b
    INNER JOIN bw ON b.book_id = bw.book_id
    INNER JOIN warehouse w ON bw.warehouse_id = w.warehouse_id
    WHERE w.warehouse_id = @libraryId
END
