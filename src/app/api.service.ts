import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Conta } from 'src/model/conta';
import { Risco } from 'src/model/risco';
import { ContaForm } from 'src/model/contaForm';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:9000/contas';
const apiUrlRiscos = apiUrl+"/riscos";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRiscos (): Observable<Risco[]> {
    return this.http.get<Risco[]>(apiUrlRiscos)
      .pipe(
        tap(risco => console.log('leu riscos')),
        catchError(this.handleError('getRiscos', []))
      );
  }

  getContas (): Observable<Conta[]> {
    return this.http.get<Conta[]>(apiUrl)
      .pipe(
        tap(conta => console.log('leu as contas')),
        catchError(this.handleError('getContas', []))
      );
  }

  getConta(id: number): Observable<Conta> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Conta>(url).pipe(
      tap(_ => console.log(`leu a conta id=${id}`)),
      catchError(this.handleError<Conta>(`getConta id=${id}`))
    );
  }

  addConta (contaForm): Observable<Conta> {
    return this.http.post<Conta>(apiUrl, contaForm, httpOptions).pipe(
      tap((conta: Conta) => console.log(`adicionou a conta com w/ id=${conta.id}`)),
      catchError(this.handleError<Conta>('addConta'))
    );
  }

  updateConta(conta): Observable<any> {
    const url = `${apiUrl}`;
    return this.http.put(url, conta, httpOptions).pipe(
      tap(_ => console.log(`atualiza a conta com id=${conta.id}`)),
      catchError(this.handleError<any>('updateConta'))
    );
  }

  deleteConta (id): Observable<Conta> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Conta>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a conta com id=${id}`)),
      catchError(this.handleError<Conta>('deleteConta'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
