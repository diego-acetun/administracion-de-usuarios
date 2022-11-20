import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/organismos/login/login.component';
import { CrearUsuarioComponent } from './components/organismos/crear-usuario/crear-usuario.component';
const routes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
