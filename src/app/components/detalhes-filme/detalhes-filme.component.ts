import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { CreditosFilme } from 'src/app/models/credito-filme';
import { DetalhesFilme } from 'src/app/models/detalhe-fime';
import { Filme } from 'src/app/models/filme';
import { ServicoFilme } from 'src/app/services/servico-filme';
import { ServicoLocalStorage } from 'src/app/services/servico-local-storage';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css']
})

export class DetalhesFilmeComponent implements OnInit {
  urlSegura: SafeResourceUrl = '';
  detalhe: DetalhesFilme = new DetalhesFilme(new Filme(0, '', ''), [], '', '', 0, 0, false)
  generos: string[] = []
  link: string = '';
  favorito: boolean = false;
  creditosFilmes: CreditosFilme[] = [];

  constructor(
    private route: ActivatedRoute,
    private servicoFilme: ServicoFilme,
    private servicoLocal: ServicoLocalStorage,
    private toaster: ToastrService,
  ) { }

  AdicionarFavoritos(id: number) {
    if (this.favorito == true) {
      this.favorito = false;
      this.toaster.success("Filme removido dos favoritos!", "Sucesso");
    }
    else {
      this.favorito = true;
      this.toaster.success("Filme adicionado aos favoritos!", "Sucesso");
    }

    this.servicoLocal.adicionarFilmeFavorito(id);
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const id: number = parseInt(params.get('id') as string);
          this.favorito = this.servicoLocal.PossuiFilme(id);
          this.pegarCreditosFilme(id);
          return this.servicoFilme.SelecioarPorId(id);
        })
      )
      .subscribe((res) => {
        this.pegarDetalhes(res);
      });

  }

  private pegarDetalhes(res: any): void {
    this.detalhe = this.servicoFilme.MapeadorDetlhesFilme(res);

    this.pegarKeyVideoFilme();
  }

  private pegarCreditosFilme(id: number) {
    this.servicoFilme.PegarCreditosFilme(id).subscribe(res => {
      this.creditosFilmes = this.servicoFilme.MapearCreditos(res.cast, id)
    })
  }

  private pegarKeyVideoFilme(): void {
    this.servicoFilme.PegarKeyTrailerFilmePorId(this.detalhe.filme.id).subscribe((res) => {
      let key = res.results[res.results.length - 1].key;
      this.link = `https://youtube.com/embed/${key}`;
    });
  }

  
}
