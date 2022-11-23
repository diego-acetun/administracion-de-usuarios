import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { usuario } from './interfaces/usuario';
import { data } from './interfaces/data';
import { login } from './interfaces/login';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // private url = 'https://crud-user.vercel.app/api/v1/users?page=1&limit=50';
  private url = 'https://crud-user.vercel.app/api/v1';
  public page = 1;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  login(credentials: login): Observable<usuario> {
    return this.http
      .post<usuario>(`${this.url}/login`, credentials, this.httpOptions)
      .pipe(
        tap((_) =>
          this.toastr.success(
            'Iniciando sesion'
          )
        ),
        catchError(this.handleError<any>('getUsuarios', []))
      );
  }
  getUsuario(id: string): Observable<usuario> {
    return this.http.get<data>(`${this.url}/users${id}`).pipe(
      tap((_) => console.log('bien getUser')),
      catchError(this.handleError<any>('getUsusario', []))
    );
  }

  crearUsuario(user: usuario): Observable<usuario> {
    return this.http
      .post<usuario>(`${this.url}/users`, user, this.httpOptions)
      .pipe(
        tap((newUser: usuario) =>
          console.log(`se creo el usuario ${newUser.name}`)
        ),
        catchError(this.handleError<usuario>('addHero'))
      );
  }

  getUsuarios(): Observable<usuario[]> {
    return this.http
      .get<data>(`${this.url}/users?page=${this.page}&limit=50`)
      .pipe(
        map((ususarios) => ususarios.rows),
        tap((_) => console.log('bien')),
        catchError(this.handleError<any>('getUsuarios', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.toastr.error('Credenciales incorrectas');
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
