import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, ignoreElements, map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { usuario } from './interfaces/usuario';
import { data } from './interfaces/data';
import { login } from './interfaces/login';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  // private url = 'https://crud-user.vercel.app/api/v1/users?page=1&limit=50';
  private url = 'https://crud-user.vercel.app/api/v1';
  public page = 11;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  logOut() {
    if (localStorage.getItem('usuario')) {
      localStorage.removeItem('usuario');
    }
    this.router.navigate([``]);
  }
  verficarToken() {
    if (localStorage.getItem('usuario')) {
      const loggedUser = localStorage.getItem('usuario') || '';
      const user: usuario = JSON.parse(loggedUser);
      console.log('user local', user);
      this.router.navigate([`/home/${user.id}`]);
    }
  }
  login(credentials: login): Observable<usuario> {
    // if (credentials.username === 'admin' && credentials.password == 'admin') {
    //   this.router.navigate(['/']);
    //   return of();
    // }
    return this.http
      .post<usuario>(`${this.url}/login`, credentials, this.httpOptions)
      .pipe(
        tap((_) => {
          // this.toastr.success('Iniciando sesion');
          this.router.navigate([`/home/${_.id}`]);
          localStorage.setItem('usuario', JSON.stringify(_));
        }),
        catchError(this.handleError<any>('loginError', []))
      );
  }
  getUsuario(id: string): Observable<usuario> {
    return this.http.get<usuario>(`${this.url}/users/${id}`).pipe(
      tap((_) => this.toastr.success(`usuario ${_.name} obtenido`)),
      catchError(this.handleError<any>('getUsusario', []))
    );
  }

  crearUsuario(user: usuario): Observable<usuario> {
    return this.http
      .post<usuario>(`${this.url}/users`, user, this.httpOptions)
      .pipe(
        tap((newUser: usuario) =>
          this.toastr.success(`Se ha creado el usuario ${newUser.name}`)
        ),
        catchError(this.handleError<usuario>('addHero'))
      );
  }

  getUsuarios(): Observable<usuario[]> {
    if (this.page <= 1) {
      this.page = 1;
      this.toastr.success(`Estas en la pagina ${this.page}`);
    }
    return this.http
      .get<data>(`${this.url}/users?page=${this.page}&limit=50`)
      .pipe(
        map((ususarios) => ususarios.rows),
        tap((_) => this.toastr.success(`Usuarios de la pagina ${this.page}`)),
        catchError(this.handleError<any>('getUsuarios', []))
      );
  }

  editarUsuario(updatedUser: usuario): Observable<usuario> {
    return this.http
      .put<usuario>(
        `${this.url}/users/${updatedUser.id}`,
        updatedUser,
        this.httpOptions
      )
      .pipe(
        map((user) => user),
        tap((_) =>
          this.toastr.success(`Se actualizaron los datos del usuario ${_.name}`)
        ),
        catchError(this.handleError<any>('getUsuarios', []))
      );
  }

  eliminarUsuario(id: string | undefined): Observable<usuario> {
    return this.http.delete<usuario>(`${this.url}/users/${id}`).pipe(
      map((user) => user),
      tap((_) => {
        this.toastr.warning(`Se elimino el usuario ${_.name}`);
        // this.router.navigate(['']);
      }),
      catchError(this.handleError<any>('getUsuarios', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      if (operation === 'loginError') {
        this.toastr.error('Credenciales incorrectas');
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
