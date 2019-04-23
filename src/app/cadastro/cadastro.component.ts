import { Component, OnInit } from '@angular/core';

export interface Riscos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  riscos: Riscos[] = [
    {value: 'A', viewValue: '0%'},
    {value: 'B', viewValue: '10%'},
    {value: 'C', viewValue: '20%'}
  ];

  constructor() { }



  ngOnInit() {
  }

}
