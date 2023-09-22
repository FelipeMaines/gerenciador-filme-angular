import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent {

  constructor(private router: Router){}

@Input() filme: Filme = new Filme(0, '', '')

NavegarParaDetalhesFilme(){

  this.router.navigate([`filme/detalhes/${this.filme.id}`])
}
}
