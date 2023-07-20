import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadresComponent } from './login/padres/padres.component';
import { PersonalComponent } from './login/personal/personal.component';
import { AlumnosComponent } from './registro/alumnos/alumnos.component';
import { EncargadosComponent } from './registro/encargados/encargados.component';
import { HomeComponent } from './home/home/home.component';
import { PadresrComponent } from './registro/padresr/padresr.component';
import { PersonalrComponent } from './registro/personalr/personalr.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'loginpadres', component: PadresComponent},
  { path: 'loginpersonal', component: PersonalComponent},
  { path: 'registroalumnos', component: AlumnosComponent},
  { path: 'registroencargados', component: EncargadosComponent},
  { path: 'registropadres', component: PadresrComponent},
  { path: 'registropersonal', component: PersonalrComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }