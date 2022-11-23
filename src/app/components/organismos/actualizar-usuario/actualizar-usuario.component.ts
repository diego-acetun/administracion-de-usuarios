import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces/usuario';
@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css'],
})
export class ActualizarUsuarioComponent implements OnInit {
  user: usuario = {
    name: 'nameEdit',
    birthday: '2002/02/06',
    email: 'mail@mail',
  };
  constructor() {}

  ngOnInit(): void {}
}
