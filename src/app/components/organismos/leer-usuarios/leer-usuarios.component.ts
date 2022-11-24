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
    this.usuarioService.page += 1;
    this.getHeroes();
  }
  paginaAnterior() {
    this.usuarioService.page -= 1;
    this.getHeroes();
  }
}
