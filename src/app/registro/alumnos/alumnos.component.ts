import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
[x: string]: any;

  AlumnosData: any = {};
  myForm!: FormGroup;

  constructor( 
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ){}


  ngOnInit(){
    this.myForm = this.formBuilder.group({
      nombre:[''],
      apellidos:[''],
      grupo:[''],
      matricula:[''],
      foto:[''],
      observaciones: [''],
      padreid:[''],
    })
  }

registerAlumnos(){
  const nombre = this.AlumnosData.nombre;
  const apellidos = this.AlumnosData.apellidos;
  const grupo = this.AlumnosData.grupo;
  const matricula = this.AlumnosData.matricula;
  const foto = this.AlumnosData.foto;
  const observaciones = this.AlumnosData.observaciones;
  const padreid = this.AlumnosData.padreid;

  this. authService.registerAlumnos(nombre,apellidos,grupo,matricula, foto, observaciones, padreid).subscribe(
    data => {
      console.log( 'Alumno registado con exito', data);
    },
      error =>{
        console.log('No se pudo completar el registro', error);
      }
  )
}
  
  onFileSelected(){
  }

  limpiar(){
    this.myForm.reset();
  }

}