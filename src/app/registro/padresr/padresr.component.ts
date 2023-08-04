import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-padresr',
  templateUrl: './padresr.component.html',
  styleUrls: ['./padresr.component.css']
})
export class PadresrComponent {
  PadresData: any = {};

  myForm!:FormGroup;

  constructor( private router: Router, private formBuilder:FormBuilder){}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      nombre: [''],
      apellidos: [''],
      grado: [''],
      imagen: ['']
      // Otros campos de tu formulario, si los tienes
    });
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
