import { Component, Input, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/usuario.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() user: usuario = { name: '', email: '', image: '' };
  mostrar = false;
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {}
  click() {
    this.mostrar = !this.mostrar;
  }

  logOut() {
    this.usuarioService.logOut();
  }
}
