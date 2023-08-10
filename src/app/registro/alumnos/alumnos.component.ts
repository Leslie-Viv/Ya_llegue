import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HijosService } from 'src/app/services/hijos.service';
import Swal from 'sweetalert2';


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
    private hijosService: HijosService,
    private formBuilder: FormBuilder,
    private ngZone: NgZone,

  ){}


  ngOnInit(){
    this.myForm = this.formBuilder.group({
      nombre:[''],
      apellidos:[''],
      grupo:[''],
      matricula:[''],
      foto:[''],
      observaciones: [''],
      padreID:[''],
    })
  }

registerAlumnos(){
  const nombre = this.AlumnosData.nombre;
  const apellidos = this.AlumnosData.apellidos;
  const grupo = this.AlumnosData.grupo;
  const matricula = this.AlumnosData.matricula;
  const foto = this.AlumnosData.foto;
  const observaciones = this.AlumnosData.observaciones;
  const padreID = this.AlumnosData.padreID;

  this. hijosService.registerAlumnos(nombre,apellidos,grupo,matricula, foto, observaciones, padreID).subscribe(
    data => {
      console.log( 'Alumno registado con exito', data);
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Alumno registrado con éxito',
      })
    },
      error =>{
        console.log('No se pudo completar el registro', error);
        Swal.fire({
          icon: 'warning',
          title: 'Registro no completado',
          text: 'Alumno no registrado',
        });
      }
  )
}
  
  onFileSelected(){
  }


  reset(){
    this.myForm.reset();
  }

}


