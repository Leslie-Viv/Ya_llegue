import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-personalr',
  templateUrl: './personalr.component.html',
  styleUrls: ['./personalr.component.css']
})
export class PersonalrComponent {

  EscuelaData: any = {};
  myForm!: FormGroup;

  constructor(private authService: AuthService,private router: Router,private formBuilder:FormBuilder){}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      matricula: [''],
      password: [''],
      nombre: [''],
      apellidos: [''],
      puesto: [''],
      foto: [''],


      // Otros campos de tu formulario, si los tienes
    });
  }

    
        


  registerPersonal() {
    const matricula = this.EscuelaData.matricula;
    const password = this.EscuelaData.password;
    const nombre = this.EscuelaData.nombre;
    const apellidos = this.EscuelaData.apellidos;
    const puesto = this.EscuelaData.puesto;
    const foto = this.EscuelaData.foto;

    this.authService.register(nombre,apellidos,puesto,matricula, password, foto).subscribe(
      data => {
        console.log('Usuario registrado:', data);
        // Puedes realizar alguna acción adicional después de registrar el usuario
      },
      error => {
        console.log('Error al registrar usuario:', error);
        // Manejar el error si es necesario
      }
    );
  }

  returnlogin(){
    this.router.navigate(['loginpersonal'])
  }

  onFileSelected(){}

  limpiar(){
    this.myForm.reset();
  }

  
}
