import { Component, Input, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/usuario.service';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  @Input() usuarios!: usuario[];
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  click(id: string | undefined) {
    // console.log('funcionando', id);
    this.usuarioService.eliminarUsuario(id).subscribe((deletedUser) => {
      this.usuarios = this.usuarios.filter((user) => user.id !== id);
    });
  }
}
