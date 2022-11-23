import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuario } from 'src/app/interfaces/usuario';
import { Validaciones } from 'src/app/validaciones';
@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
})
export class UsersFormComponent implements OnInit {
  @Input() user: usuario = {
    name: '',
    birthday: '2000-04-02',
    email: '',
    password: '',
    image: '',
  };
  public formulario!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // let date: Date = new Date();
    // console.log('Date = ' + date);
    this.formulario = this.formBuilder.group({
      name: [this.user.name, [Validators.required]],
      birthday: [this.user.birthday, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      image: [this.user.image, [Validators.required]],
      password: [
        this.user.password,
        [
          Validators.required,
          Validators.minLength(5),
          Validaciones.validarPasswordConCaracteresEspeciales,
          Validaciones.validarPasswordConMayuscula,
        ],
      ],
    });
  }
}
