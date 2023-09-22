export class Filme {
    id: number = 0;
    poster_path: string;
    title: string;
  
    constructor(Id: number, Poster_path: string, Title: string ){
        this.id = Id
        this.poster_path = Poster_path,
        this.title = Title
    }
}