import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/usuario.service';

import { usuario } from 'src/app/interfaces/usuario';
import { UsersFormComponent } from '../../moleculas/users-form/users-form.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css'],
})
export class ActualizarUsuarioComponent implements OnInit {
  @ViewChild(UsersFormComponent) formulario!: UsersFormComponent;

  user: usuario = {
    name: 'nameEdit',
    birthday: '1997-05-25',
    email: 'mail@mail',
    password: '123456',
    image: 'localhost',
  };

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): Observable<usuario> {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log('id:', id);
    return this.usuarioService.getUsuario(id);
  }

  // getUsuario() {
  //   const id = this.route.snapshot.paramMap.get('id')!;
  //   console.log('id:', id);
  //   return this.usuarioService.getUsuario(id).subscribe((user) => {
  //     this.user = user;
  //     this.formulario.formulario.patchValue(user);
  //   });
  // }

  click() {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log('mostrando');
    const updatedUser: usuario = { ...this.formulario.formulario.value, id };
    this.usuarioService.editarUsuario(updatedUser).subscribe((user) => {});
  }
}
