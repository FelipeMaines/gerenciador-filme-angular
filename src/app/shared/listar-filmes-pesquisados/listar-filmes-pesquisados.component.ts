import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from 'src/app/models/filme';
import { ServicoFilme } from 'src/app/services/servico-filme';


@Component({
  selector: 'app-listar-filmes-pesquisados',
  templateUrl: './listar-filmes-pesquisados.component.html',
  styleUrls: ['./listar-filmes-pesquisados.component.css']
})
export class ListarFilmesPesquisadosComponent implements OnInit{

constructor(private servicoFilme: ServicoFilme, private router: Router, private route: ActivatedRoute){}

  queryPesquisa: string = ''
  filmesPesquisados: Filme[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.queryPesquisa = param['query'];
      this.pesquisarFilmes();
    })
  }

  pesquisarFilmes(){
    this.servicoFilme.PesquisarFilmes(this.queryPesquisa).subscribe(res => {
      this.filmesPesquisados = this.servicoFilme.MapeadorFilmes(res.results);
      console.log(this.filmesPesquisados);
    });
  }
}
