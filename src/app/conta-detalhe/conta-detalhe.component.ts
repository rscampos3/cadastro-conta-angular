import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ApiService } from '../api.service';
import { Conta } from 'src/model/conta';

@Component({
  selector: 'app-conta-detalhe',
  templateUrl: './conta-detalhe.component.html',
  styleUrls: ['./conta-detalhe.component.css']
})
export class ContaDetalheComponent implements OnInit {

  conta: Conta = {id: null, nomeCliente: '', limiteCredito: null, risco: '', taxaDeJuros: null};
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getConta(this.route.snapshot.params['id']);
  }

  getConta(id) {
    this.api.getConta(id)
      .subscribe(data => {
        this.conta = data;
        console.log(this.conta);
      });
  }

  deleteConta(id) {
    this.isLoadingResults = true;
    this.api.deleteConta(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/contas']);
        }, (err) => {
          this.isLoadingResults = false;
          console.log(err);
        }
      );
  }

}
