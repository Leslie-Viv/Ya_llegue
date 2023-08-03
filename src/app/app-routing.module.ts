import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadresComponent } from './login/padres/padres.component';
import { PersonalComponent } from './login/personal/personal.component';
import { AlumnosComponent } from './registro/alumnos/alumnos.component';
import { EncargadosComponent } from './registro/encargados/encargados.component';
import { HomeComponent } from './home/home/home.component';
import { PadresrComponent } from './registro/padresr/padresr.component';
import { PersonalrComponent } from './registro/personalr/personalr.component';
import { EncargadoprogresoComponent } from './progreso/encargado/encargado.component';
import { PadreprogresoComponent } from './progreso/padre/padre.component';
import { HomepadresComponent } from './homepadres/homepadres.component';
import { HeaderComponent } from './homepadres/header/header.component';



const routes: Routes = [
  { path: '', redirectTo: 'loginpadres', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'loginpadres', component: PadresComponent},
  { path: 'loginpersonal', component: PersonalComponent},
  { path: 'registroalumnos', component: AlumnosComponent},
  { path: 'registroencargados', component: EncargadosComponent},
  { path: 'registropadres', component: PadresrComponent},
  { path: 'registropersonal', component: PersonalrComponent },
  { path: 'progesopersonal', component: EncargadoprogresoComponent },
  { path: 'progresopadre', component: PadreprogresoComponent},
  { path:'homepadres',component:HomepadresComponent},
  { path:'header',component:HeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }