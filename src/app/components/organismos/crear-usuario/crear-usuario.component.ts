import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UsersFormComponent } from '../../moleculas/users-form/users-form.component';
import { ToastrService } from 'ngx-toastr';
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
    private usuarioService: UsuarioService
  ) {}
  nuevoUsuario!: usuario;
  ngOnInit(): void {}
  ngAfterViewInit() {
    // console.log('formOtro 2', this.formOtro);
    // ...
  }

  click1() {
    // this.toastr.success('Hello world!', 'Toastr fun!');
    // console.log('formulario1', this.formulario1.formulario.value);
    // console.log('formulario1', this.formulario1.formulario.invalid);
    // console.log("jxjsx", this.formulario1.formulario.get('password')?.errors);
    //obteniendo los datos del formulario
    // console.log('form', this.formulario1.formulario.value);
    if (this.formulario1.formulario.invalid) {
      this.toastr.error(
        'Los campos del formulario no se han llenado correctamente'
      );
      return;
    }
    this.nuevoUsuario = this.formulario1.formulario.value;
    // console.log('nuevo ususario', this.nuevoUsuario);
    this.usuarioService
      .crearUsuario(this.nuevoUsuario)
      .subscribe((newUser) => console.log('response:', newUser));
  }
}
//npm i package -E
