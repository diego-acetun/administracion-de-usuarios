import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UsersFormComponent } from '../../moleculas/users-form/users-form.component';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit, AfterViewInit {
  @ViewChild(UsersFormComponent) formulario1!: UsersFormComponent;
  constructor() {}
  
  ngOnInit(): void {}
  ngAfterViewInit() {
    // console.log('formOtro 2', this.formOtro);
    // ...
  }

  click1() {
    console.log('formulario1', this.formulario1.formulario.value);
  }
}
