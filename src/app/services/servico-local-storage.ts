import { Injectable } from "@angular/core";
import { ServicoFilme } from "./servico-filme";
import { DetalhesFilme } from "../models/detalhe-fime";

@Injectable({
    providedIn: 'root',
})

export class ServicoLocalStorage {

    private chaveLocalStorage = 'filmesFavoritos';

    constructor(private servicoFilme: ServicoFilme) { }

    adicionarFilmeFavorito(id: number): any {
        const filmesFavoritos: number[] = this.PegarIdsDosFilmesFavoritos();

        if (filmesFavoritos.find(numero => numero == id))
            this.removerFilmeFavorito(id, filmesFavoritos);
        else {
            filmesFavoritos.push(id);
            localStorage.setItem(this.chaveLocalStorage, JSON.stringify(filmesFavoritos));
        }
    }

    removerFilmeFavorito(id: number, filmesFavoritos: number[]): void {
        const index = filmesFavoritos.indexOf(id);
        if (index !== -1) {
            filmesFavoritos.splice(index, 1);
            localStorage.setItem(this.chaveLocalStorage, JSON.stringify(filmesFavoritos));
        }
    }

    PegarIdsDosFilmesFavoritos(): number[] {
        const filmesFavoritosJSON = localStorage.getItem(this.chaveLocalStorage);
        if (filmesFavoritosJSON) {
            return JSON.parse(filmesFavoritosJSON);
        }
        return [];
    }

    PossuiFilme(id: number): boolean{
        let favoritos: number[] = this.PegarIdsDosFilmesFavoritos();

        return favoritos.includes(id);
    }
}