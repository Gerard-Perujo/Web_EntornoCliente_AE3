import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { MiUsuarioComponent } from './Componentes/mi-usuario/mi-usuario.component';
import { LoginComponent } from './Componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { Juego1Component } from './Componentes/juego1/juego1.component';
import { NavegadorComponent } from './Componentes/navegador/navegador.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { SobreMiComponent } from './Componentes/sobre-mi/sobre-mi.component';
import { Juego2Component } from './Componentes/juego2/juego2.component';
import { Juego3Component } from './Componentes/juego3/juego3.component';
import { Juego4Component } from './Componentes/juego4/juego4.component';
import { Juego5Component } from './Componentes/juego5/juego5.component';
import { Juego6Component } from './Componentes/juego6/juego6.component';
import { Juego7Component } from './Componentes/juego7/juego7.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MiUsuarioComponent,
    LoginComponent,
    Juego1Component,
    NavegadorComponent,
    ContactoComponent,
    SobreMiComponent,
    Juego2Component,
    Juego3Component,
    Juego4Component,
    Juego5Component,
    Juego6Component,
    Juego7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
