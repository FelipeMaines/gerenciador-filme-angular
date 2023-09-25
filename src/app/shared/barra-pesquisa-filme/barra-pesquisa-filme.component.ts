import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Filme } from 'src/app/models/filme';
import { ServicoFilme } from 'src/app/services/servico-filme';

@Component({
  selector: 'app-barra-pesquisa-filme',
  templateUrl: './barra-pesquisa-filme.component.html',
  styleUrls: ['./barra-pesquisa-filme.component.css']
})
export class BarraPesquisaFilmeComponent {
  queryPesquisa: string = '';

  constructor(private router: Router){}

  pesquisarFilmes(){
      this.router.navigate([`filme/filmes-pesquisados`],
      {queryParams: {query: this.queryPesquisa}})
    };
}
