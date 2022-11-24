import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario.service';

import { usuario } from 'src/app/interfaces/usuario';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: usuario = {
    name: '',
    email: '',
    image: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log('id desde actualizar', id);
    this.usuarioService.getUsuario(id).subscribe((user) => {
      this.user = user;
      console.log('usuario desde home', this.user);
    });
  }

  click() {
    this.router.navigate([`/editar-usuario/${this.user.id}`]);
  }
}
