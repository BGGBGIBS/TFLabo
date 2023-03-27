export interface Library {
    library_id: number;
    library_name: string;
    library_location: string;
  }
  

export interface LibraryArray{
  results : Library[];
  statusCode : number;
}