import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { ServicoFilme } from 'src/app/services/servico-filme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  filmes: Filme[] = []

  constructor(private servicoFilme: ServicoFilme){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
