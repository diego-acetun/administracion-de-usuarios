import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/usuario.service';
@Component({
  selector: 'app-leer-usuarios',
  templateUrl: './leer-usuarios.component.html',
  styleUrls: ['./leer-usuarios.component.css'],
})
export class LeerUsuariosComponent implements OnInit {
  usuarios!: usuario[];
  // public usuarios: usuario[] = [
  //   {
  //     name: 'name1',
  //     birthday: '1990/02/05',
  //     email: 'email@mail',
  //   },
  //   {
  //     name: 'name2',
  //     birthday: '1990/02/05',
  //     email: 'email@mail',
  //   },
  //   {
  //     name: 'name3',
  //     birthday: '1990/02/05',
  //     email: 'email@mail',
  //   },
  //   {
  //     name: 'name4',
  //     birthday: '1990/02/05',
  //     email: 'email@mail',
  //   },
  // ];
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.usuarioService
      .getUsuarios()
      .subscribe((users) => (this.usuarios = users));
  }

  paginaSiguiente() {
    console.log('siguinete');
    this.usuarioService.page += 1;
    this.getHeroes();
  }
}
