import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { Filme } from "../models/filme";
import { ObterHeaderAutorizacao } from "ObterHeaderAutorizacao";
import { DetalhesFilme } from "../models/detalhe-fime";
import { CreditosFilme } from "../models/credito-filme";
import { Observable } from "rxjs/internal/Observable";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class ServicoFilme {
    API_URL: string = environment.API_URL;

    constructor(private http: HttpClient) { }

    BuscarFilmes(chave: string, pagina: number) {
        return this.http.get<any>(`${this.API_URL}/${chave}?page=${pagina}`, ObterHeaderAutorizacao())
    }

    MapearCreditos(res: any[]) {
        return 
    }

    SelecioarPorId(id: number) {
        return this.http.get<any>(`${this.API_URL}/${id}`, ObterHeaderAutorizacao())
    }

    MapeadorFilmes(lista: any[]) {
        return lista.map(res => this.MapearFilme(res))
    }

    MapearFilme(obj: any): Filme {
        return {
            id: obj.id,
            title: obj.title,
            poster_path: 'https://image.tmdb.org/t/p/' + 'w500' + obj.poster_path
        }
    }

    MapeadorDetlhesFilme(obj: any): DetalhesFilme{
        return {
            filme: this.MapearFilme(obj),
            genres: obj.genres,
            overview: obj.overview,
            release_date: obj.release_date,
            vote_avarage: obj.vote_avarage,
            vote_count: obj.vote_count
        }
    }

    PegarKeyTrailerFilmePorId(id: number){
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos`, ObterHeaderAutorizacao())
    }
}

