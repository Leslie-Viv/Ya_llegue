import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadresComponent } from './login/padres/padres.component';
import { PersonalComponent } from './login/personal/personal.component';
import { AlumnosComponent } from './registro/alumnos/alumnos.component';
import { EncargadosComponent } from './registro/encargados/encargados.component';
import { HttpClientModule } from '@angular/common/http';
import { PadresrComponent } from './registro/padresr/padresr.component';
import { HomeComponent } from './home/home/home.component';
import { PersonalrComponent } from './registro/personalr/personalr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncargadoprogresoComponent } from './progreso/encargado/encargado.component';
import { QRCodeModule } from 'angularx-qrcode';
import { HomepadresComponent } from './homepadres/homepadres.component';
import { HeaderComponent } from './homepadres/header/header.component';
import { HijosComponent } from './hijos/hijos.component';
import { TutoresdispoComponent } from './tutoresdispo/tutoresdispo.component'; 
import { HomePersonalComponent } from './homepersonal/homepersonal.component';
import { PerfilpersonalComponent } from './perfilpersonal/perfilpersonal.component';
import { PerfilAlumnoComponent } from './perfil-alumno/perfil-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    PadresComponent,
    PersonalComponent,
    AlumnosComponent,
    EncargadosComponent,
    PadresrComponent,
    HomeComponent,
    PersonalrComponent,
    EncargadoprogresoComponent,
    HomepadresComponent,
    HijosComponent,
    TutoresdispoComponent,
    HomePersonalComponent,
    PerfilpersonalComponent,
    PerfilAlumnoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
