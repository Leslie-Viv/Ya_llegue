import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-encargados',
  templateUrl: './encargados.component.html',
  styleUrls: ['./encargados.component.css']
})
export class EncargadosComponent {
  EncargadoData: any = {};

  myForm!:FormGroup;


  constructor( private router: Router, private authService: AuthService, private formBuilder:FormBuilder){}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      nombre: [''],
      apellidos: [''],
      foto: ['']
      // Otros campos de tu formulario, si los tienes
    });
  }

  registerencargados() {
    const nombre= this.EncargadoData.nombre;
    const apellidos = this.EncargadoData.apellidos;
    const foto = this.EncargadoData.foto;

    this.authService.registerencargados( nombre,apellidos,foto ) .subscribe(
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
