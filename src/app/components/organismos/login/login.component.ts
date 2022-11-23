import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginFormComponent } from '../../moleculas/login-form/login-form.component';
import { UsuarioService } from 'src/app/usuario.service';

import { login } from 'src/app/interfaces/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild(LoginFormComponent) form!: LoginFormComponent;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  p() {
    console.log('form', this.form.formulario.value);
    const credentials: login = this.form.formulario.value;
    this.usuarioService
      .login(credentials)
      .subscribe((user) => console.log('login', user));
  }
}
