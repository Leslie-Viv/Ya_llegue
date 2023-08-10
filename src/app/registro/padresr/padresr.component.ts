import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-padresr',
  templateUrl: './padresr.component.html',
  styleUrls: ['./padresr.component.css']
})
export class PadresrComponent {
  PadresData: any = {};

  myForm!:FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder:FormBuilder){}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      nombre: [''],
      apellidos: [''],
      grado: [''],
      imagen: ['']
      // Otros campos de tu formulario, si los tienes
    });
  }

  //Checar

  registerpadres() {
    const nombre= this.PadresData.nombre;
    const apellidos = this.PadresData.apellidos;
    const username = this.PadresData.username;
    const password = this.PadresData.password;
    const foto = this.PadresData.foto;

    this.authService.registerpadres( nombre,apellidos,username,password, foto ) .subscribe(
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

  onFileSelected(){
    
  }

  returnlogin(){
    this.router.navigate(['loginpadres'])
  }

  limpiar(){
    this.myForm.reset();
  }

}
