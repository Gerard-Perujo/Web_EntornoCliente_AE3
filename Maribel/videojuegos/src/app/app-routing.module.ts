import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: 'contacto', component: ContactoComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
