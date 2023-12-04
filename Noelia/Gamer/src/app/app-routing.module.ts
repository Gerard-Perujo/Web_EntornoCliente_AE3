import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { MiUsuarioComponent } from './Componentes/mi-usuario/mi-usuario.component';
import { Juego1Component } from './Componentes/juego1/juego1.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { SobreMiComponent } from './Componentes/sobre-mi/sobre-mi.component';
import { Juego2Component } from './Componentes/juego2/juego2.component';
import { Juego3Component } from './Componentes/juego3/juego3.component';
import { Juego4Component } from './Componentes/juego4/juego4.component';
import { Juego5Component } from './Componentes/juego5/juego5.component';
import { Juego6Component } from './Componentes/juego6/juego6.component';
import { Juego7Component } from './Componentes/juego7/juego7.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'usuario', component: MiUsuarioComponent},
  {path: 'juego1/:id/:titulo/:compania/:valoracion', component: Juego1Component},
  {path: 'juego2/:id/:titulo/:compania/:valoracion', component: Juego2Component},
  {path: 'juego3/:id/:titulo/:compania/:valoracion', component: Juego3Component},
  {path: 'juego4/:id/:titulo/:compania/:valoracion', component: Juego4Component},
  {path: 'juego5/:id/:titulo/:compania/:valoracion', component: Juego5Component},
  {path: 'juego6/:id/:titulo/:compania/:valoracion', component: Juego6Component},
  {path: 'juego7/:id/:titulo/:compania/:valoracion', component: Juego7Component},
  {path: 'contacto', component: ContactoComponent},
  {path: 'informacion', component: SobreMiComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
