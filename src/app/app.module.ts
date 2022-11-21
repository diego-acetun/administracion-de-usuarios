import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
// import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './components/atomos/boton/boton.component';
import { SubtituloComponent } from './components/atomos/subtitulo/subtitulo.component';
import { LoginFormComponent } from './components/moleculas/login-form/login-form.component';
import { TituloComponent } from './components/atomos/titulo/titulo.component';
import { LoginComponent } from './components/organismos/login/login.component';
import { CrearUsuarioComponent } from './components/organismos/crear-usuario/crear-usuario.component';
import { UsersFormComponent } from './components/moleculas/users-form/users-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeerUsuariosComponent } from './components/organismos/leer-usuarios/leer-usuarios.component';
import { TablaComponent } from './components/moleculas/tabla/tabla.component';
import { ActualizarUsuarioComponent } from './components/organismos/actualizar-usuario/actualizar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    SubtituloComponent,
    LoginFormComponent,
    TituloComponent,
    LoginComponent,
    CrearUsuarioComponent,
    UsersFormComponent,
    LeerUsuariosComponent,
    TablaComponent,
    ActualizarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    // ToastrModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
