import { Filme } from "./filme";

export class DetalhesFilme {
    filme: Filme;
    genres: any[];
    overview: string;
    release_date: string;
    vote_avarage: number;
    vote_count: number;
    trailer_path?: string;
    favorito?: boolean;

    constructor(Filme: Filme, Generos: Object[], OverView: string, ReleaseDate: string, VoteAvarage: number, VoteCount: number){
        this.filme = Filme,
        this.genres = Generos,
        this.overview = OverView,
        this.release_date = ReleaseDate,
        this.vote_avarage = VoteAvarage,
        this.vote_count = VoteCount
    }
}