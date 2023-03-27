export interface Ba {
    ba_id: number;
    book_id: number;
    author_id: number;
  }

export interface BaArray{
  results : Ba[];
  statusCode : number
}