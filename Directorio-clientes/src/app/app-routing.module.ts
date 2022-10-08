import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ListaComponent } from './lista/lista.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
{path: '', component:MenuComponent},
{path: 'form',component:FormComponent},
{path: 'login',component:LoginComponent},
{path: 'lista',component:ListaComponent},
{path: 'contacto',component:ContactoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
