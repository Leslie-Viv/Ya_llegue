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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PadresComponent,
    PersonalComponent,
    AlumnosComponent,
    EncargadosComponent,
    PadresComponent,
    PadresrComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
