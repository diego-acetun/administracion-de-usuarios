import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces/usuario';
@Component({
  selector: 'app-leer-usuarios',
  templateUrl: './leer-usuarios.component.html',
  styleUrls: ['./leer-usuarios.component.css'],
})
export class LeerUsuariosComponent implements OnInit {
  public usuarios: usuario[] = [
    {
      nombre: 'name1',
      fechaNacimiento: '20/06/1990',
      email: 'email@mail',
    },
    {
      nombre: 'name2',
      fechaNacimiento: '20/06/1990',
      email: 'email@mail',
    },
    {
      nombre: 'name3',
      fechaNacimiento: '20/06/1990',
      email: 'email@mail',
    },
    {
      nombre: 'name4',
      fechaNacimiento: '20/06/1990',
      email: 'email@mail',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  click() {
    this.usuarios.push({
      nombre: 'name5',
      fechaNacimiento: '20/06/1990',
      email: 'email@mail',
    });
  }
}
