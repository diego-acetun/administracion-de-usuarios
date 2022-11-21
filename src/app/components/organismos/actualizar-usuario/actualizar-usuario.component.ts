import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces/usuario';
@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css'],
})
export class ActualizarUsuarioComponent implements OnInit {
  user: usuario = {
    nombre: 'nameEdit',
    fechaNacimiento: '2000/05/06',
    email: 'mail@mail',
  };
  constructor() {}

  ngOnInit(): void {}
}
