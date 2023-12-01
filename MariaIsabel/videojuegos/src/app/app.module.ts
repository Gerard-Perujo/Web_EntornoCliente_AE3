import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './app_completa/login/Login/login.component';
import { IndexComponent } from './monchemin/index/index.component';
import { DetallesComponent } from './monchemin/detalles/detalles.component';
import { ContactoComponent } from './monchemin/contacto/contacto.component';
import { AboutComponent } from './monchemin/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    DetallesComponent,
    ContactoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
