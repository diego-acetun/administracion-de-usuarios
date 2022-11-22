import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { usuario } from 'src/app/interfaces/usuario';
@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
})
export class UsersFormComponent implements OnInit {
  @Input() user: usuario = {
    nombre: '',
    fechaNacimiento: "2000-04-02",
    email: '',
    password: '',
  };
  public formulario!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // let date: Date = new Date();
    // console.log('Date = ' + date);
    this.formulario = this.formBuilder.group({
      name: [this.user.nombre],
      fechaNacimiento: [this.user.fechaNacimiento],
      email: [this.user.email],
      password: [this.user.password],
    });
  }
}
