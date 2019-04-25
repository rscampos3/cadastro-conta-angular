import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContaComponent } from './conta/conta.component';
import { ContaDetalheComponent } from './conta-detalhe/conta-detalhe.component';
import { ContaCadastroComponent } from  './conta-cadastro/conta-cadastro.component';
import { ContaAtualizaComponent } from './conta-atualiza/conta-atualiza.component'

const routes: Routes = [
  { path: '', redirectTo: '/contas', pathMatch: 'full' },
  { path: 'contas', component: ContaComponent },
  { path: 'conta-detalhe/:id', component: ContaDetalheComponent },
  { path: 'conta-nova', component: ContaCadastroComponent },
  { path: 'conta-edita/:id', component: ContaAtualizaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
