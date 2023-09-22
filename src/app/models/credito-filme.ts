export class CreditosFilme {
    diretor: string;
    escritores: string[];
    elenco: string[];
    departament: string;

    constructor(Diretor: string, Escritores: string[], Elenco: string[], departament: string){
        this.diretor = Diretor;
        this.escritores = Escritores;
        this.elenco = Elenco;
        this.departament = departament;
    }
}