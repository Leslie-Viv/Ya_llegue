import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  miFormulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: AuthService, private router: Router, private tokenService: TokenService){
    this.miFormulario = this.formBuilder.group({
      matricula: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  save() {
    const matricula = this.miFormulario.get('matricula')?.value;
    const password = this.miFormulario.get('password')?.value;
    
    this.loginService.login(matricula, password).subscribe(
      (data) => {
        localStorage.setItem('matricula', data.matricula);
        console.log("Token: ", data.token);
        if (!data.token) {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'No tienes acceso',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          console.log(data);
          this.tokenService.setToken(data.token);
          console.log('Bienvenido Usuario');
          console.log(this.tokenService.isLogged());
          if (this.tokenService.isLogged() == true) {
            this.router.navigate(['home']);
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'No tienes acceso',
              showConfirmButton: false,
              timer: 1500
            });
          }
          this.miFormulario.reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bienvenido Usuario',
            showConfirmButton: false,
            timer: 1500
          });
        }
      },
      error => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Algo anda mal',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }
}
