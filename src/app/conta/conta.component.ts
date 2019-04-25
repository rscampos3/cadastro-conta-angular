import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Conta } from 'src/model/conta';


@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {
  
  dataSource: Conta[];  

  constructor(private api: ApiService) { }

  ngOnInit() {
    
    this.api.getContas()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      
    }, err => {
      console.log(err);
      
    });

    
  }

}
