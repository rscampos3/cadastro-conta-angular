import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Risco } from 'src/model/risco';


@Component({
  selector: 'app-conta-atualiza',
  templateUrl: './conta-atualiza.component.html',
  styleUrls: ['./conta-atualiza.component.css']
})
export class ContaAtualizaComponent implements OnInit {

  riscos: Risco[];
  id: number = null;
  contaForm: FormGroup;
  nomeCliente: String = '';
  limiteCredito: number = null;
  risco: String = '';
  taxaDeJuros: number = null;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getConta(this.route.snapshot.params['id']);

    this.api.getRiscos()
      .subscribe(res => {
        this.riscos = res;
        console.log(this.riscos);
      }, (err) => {
      console.log(err);
    });

    this.contaForm = this.formBuilder.group({
      'id': [null, Validators.required],
      'nomeCliente': [null, Validators.required],
      'limiteCredito': [null, Validators.required],
      'risco': [null, Validators.required]
 });
 }

 getConta(id) {
  this.api.getConta(id).subscribe(data => {
    this.id = data.id;
    this.contaForm.setValue({
      id: data.id,
      nomeCliente: data.nomeCliente,
      limiteCredito: data.limiteCredito,
      risco: data.risco
    });
  });
}

updateConta(form: NgForm) {
  this.isLoadingResults = true;
  this.api.updateConta(form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/conta-detalhe/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}

}
