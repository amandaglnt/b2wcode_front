import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Planeta } from '../models/planeta';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  // Url da api rest
  url = 'https://swapi.co/api/planets'; 

  // Injetando o HttpClient.
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtém todos os Planetas.
  getPlanetas(): Observable<Planeta[]> {
    return this.httpClient.get<Planeta[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }


  // Obtem um Planeta pelo ID.
  getPlanetaById(id: number): Observable<Planeta> {
    return this.httpClient.get<Planeta>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

    // Manipulação de erros.
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client.
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor.
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
}
