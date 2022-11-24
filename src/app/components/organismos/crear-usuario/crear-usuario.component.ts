import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UsersFormComponent } from '../../moleculas/users-form/users-form.component';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

import { usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/usuario.service';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit, AfterViewInit {
  @ViewChild(UsersFormComponent) formulario1!: UsersFormComponent;
  constructor(
    private toastr: ToastrService,
    private usuarioService: UsuarioService,
    private location: Location
  ) {}
  nuevoUsuario!: usuario;
  ngOnInit(): void {}
  ngAfterViewInit() {
    // console.log('formOtro 2', this.formOtro);
    // ...
  }
  goBack(): void {
    this.location.back();
  }
  click1() {
    if (this.formulario1.formulario.invalid) {
      this.toastr.error(
        'Los campos del formulario no se han llenado correctamente'
      );
      return;
    }
    this.nuevoUsuario = this.formulario1.formulario.value;
    // console.log('nuevo ususario', this.nuevoUsuario);
    this.usuarioService.crearUsuario(this.nuevoUsuario).subscribe((newUser) => {
      console.log('response:', newUser);
      this.goBack();
    });
  }
}
//npm i package -E
