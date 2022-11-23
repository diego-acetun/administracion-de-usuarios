import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { usuario } from './interfaces/usuario';
import { data } from './interfaces/data';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://crud-user.vercel.app/api/v1/users?page=1&limit=50';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<usuario[]> {
    return this.http.get<data>(this.url).pipe(
      map((ususarios)=>ususarios.rows), 
      tap((_) => console.log("bien")),
      catchError(this.handleError<any>('getUsuarios', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
