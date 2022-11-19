import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonComponent } from './components/atomos/boton/boton.component';
import { SubtituloComponent } from './components/atomos/subtitulo/subtitulo.component';
import { LoginFormComponent } from './components/moleculas/login-form/login-form.component';
import { TituloComponent } from './components/atomos/titulo/titulo.component';
import { LoginComponent } from './components/organismos/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    SubtituloComponent,
    LoginFormComponent,
    TituloComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
