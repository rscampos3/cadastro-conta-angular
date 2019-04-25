import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule, MatCardModule, MatIconModule, MatButtonModule, MatCheckboxModule,  MatFormFieldModule, MatInputModule, MatRippleModule, MatTableModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { ContaComponent } from './conta/conta.component';
import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { ContaCadastroComponent } from './conta-cadastro/conta-cadastro.component';
import { ContaDetalheComponent } from './conta-detalhe/conta-detalhe.component';
import { ContaDeleteComponent } from './conta-delete/conta-delete.component';
import { ContaAtualizaComponent } from './conta-atualiza/conta-atualiza.component';


registerLocaleData(localeBr);

const matModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCheckboxModule,
  MatTableModule,
  MatSelectModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatIconModule 
];

@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    ContaCadastroComponent,
    ContaDetalheComponent,
    ContaDeleteComponent,
    ContaAtualizaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    matModules
  ],
  exports: [
    matModules
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT' } ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
