import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Risco } from 'src/model/risco';

@Component({
  selector: 'app-conta-cadastro',
  templateUrl: './conta-cadastro.component.html',
  styleUrls: ['./conta-cadastro.component.css']
})
export class ContaCadastroComponent implements OnInit {

  riscos: Risco[];
  contaForm: FormGroup;
  nomeCliente: String = '';
  limiteCredito: number = null;
  risco:String = '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contaForm = this.formBuilder.group({
      'nomeCliente': [null, Validators.required],
      'limiteCredito': [null, Validators.required],
      'risco': [null, Validators.required]
    });

    this.api.getRiscos()
      .subscribe(res => {
        this.riscos = res;
        console.log(this.riscos);
      }, (err) => {
      console.log(err);
    });
  }

  addConta(form: NgForm){
    console.log(form);
    this.api.addConta(form)
      .subscribe(res => {
        const id = res['id'];
        this.router.navigate(['/conta-detalhe', id]);
      }, (err) => {
        console.log(err);
    
      });
  }

}
