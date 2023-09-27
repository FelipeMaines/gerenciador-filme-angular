import { Component, Input, OnInit } from '@angular/core';
import { withDebugTracing } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Filme } from 'src/app/models/filme';
import { ServicoFilme } from 'src/app/services/servico-filme';
import { ServicoLocalStorage } from 'src/app/services/servico-local-storage';

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styleUrls: ['./listar-filme.component.css']
})
export class ListarFilmeComponent implements OnInit {

  filmes: Filme[] = []
  totalPages: number[] = [];
  currentPage: number = 1;
  genero: string = '';

  constructor(private servicoFilme: ServicoFilme, private servicoLocalStorage: ServicoLocalStorage, private toaster: ToastrService) {}

  FiltrarFilme(chave: string) {
    this.genero = chave;

    chave == 'favoritos' ? this.PegarFilmesFavoritos() : this.servicoFilme.BuscarFilmes(chave, this.currentPage).subscribe(res => {
      this.filmes = this.servicoFilme.MapeadorFilmes(res.results);
    })
  }

  PegarFilmesFavoritos(){
    let ids: number[] = this.servicoLocalStorage.PegarIdsDosFilmesFavoritos();

    this.SelecionarFilmesPorId(ids);
  }

  MudarPagina(pagina: number){
    this.currentPage = pagina;

    this.servicoFilme.BuscarFilmes(this.genero, this.currentPage).subscribe(res => {
      this.filmes = this.servicoFilme.MapeadorFilmes(res.results);
    })
  }

  previousPage(): any{
    this.currentPage > 1 ? this.MudarPagina(this.currentPage -1) : this.toaster.error("Nao foi possivel voltar de página");
  }

  nextPage(){
    this.currentPage < 30 ? this.MudarPagina(this.currentPage + 1) : this.toaster.error("Nao foi possivel ir para proxima página");
    this.toaster.success("Foi para prox pagina", "Sucesso")
  }
  SelecionarFilmesPorId(arrayId: number[]){
    this.filmes = [];

    for(let i = 0; i < arrayId.length; i++){

      this.servicoFilme.SelecioarPorId(arrayId[i]).subscribe(res => {

        let filmetemp = this.servicoFilme.MapearFilme(res)
        this.filmes.push(filmetemp);
      })
    }
  }

  ngOnInit(): void {
    this.filmes = [];

    for(let i=1;i<31;i++)
      this.totalPages.push(i);

    this.FiltrarFilme('popular');
  }
}