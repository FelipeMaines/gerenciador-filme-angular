import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditosFilme } from 'src/app/models/credito-filme';
import { ServicoFilme } from 'src/app/services/servico-filme';

@Component({
  selector: 'app-creditos-filme',
  templateUrl: './creditos-filme.component.html',
  styleUrls: ['./creditos-filme.component.css']
})
export class CreditosFilmeComponent implements OnInit{
  @Input() credito: CreditosFilme = new CreditosFilme('', '', '', 0)

  constructor(private servicoFilme: ServicoFilme, private route: ActivatedRoute,){}
  
  ngOnInit(): void {

    
  }

}
