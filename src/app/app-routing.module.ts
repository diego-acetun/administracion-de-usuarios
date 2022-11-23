import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/organismos/login/login.component';
import { CrearUsuarioComponent } from './components/organismos/crear-usuario/crear-usuario.component';
import { LeerUsuariosComponent } from './components/organismos/leer-usuarios/leer-usuarios.component';
import { ActualizarUsuarioComponent } from './components/organismos/actualizar-usuario/actualizar-usuario.component';
import { HomeComponent } from './components/organismos/home/home.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent },
  { path: 'leer-usuarios', component: LeerUsuariosComponent },
  { path: 'editar-usuario/:id', component: ActualizarUsuarioComponent },
  { path: 'home/:id', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
