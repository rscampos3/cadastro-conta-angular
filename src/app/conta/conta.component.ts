import { Component, OnInit } from '@angular/core';

export interface Contas{
  id: number,
  nomeCliente: string,
  limiteCredito: number,
  risco: string,	
  taxaDeJuros: number
}

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  contas : Contas[]=[{
    id: 1,
    nomeCliente: 'Rafael Campos',
    limiteCredito: 50000,
    risco: 'A',	
    taxaDeJuros: 0
  },
  {
    id: 2,
    nomeCliente: 'Daniele Campos',
    limiteCredito: 50390,
    risco: 'B',	
    taxaDeJuros: 10
  },
  {
    id: 3,
    nomeCliente: 'Nivia Pereira',
    limiteCredito: 30000,
    risco: 'C',	
    taxaDeJuros: 20
  },
  {
    id: 4,
    nomeCliente: 'André Oliveira',
    limiteCredito: 22009,
    risco: 'A',	
    taxaDeJuros: 0
  },
  {
    id: 5,
    nomeCliente: 'Jenifer Cristina',
    limiteCredito: 10030,
    risco: 'B',	
    taxaDeJuros: 10
  },
  {
    id: 6,
    nomeCliente: 'Camila Carmassi',
    limiteCredito: 9000,
    risco: 'C',	
    taxaDeJuros: 20
  }]

  constructor() { }

  ngOnInit() {
  }

}
