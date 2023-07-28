import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  miFormulario: FormGroup;
  isPersonalLogin: boolean = true; // Establecer el tipo de inicio de sesión predeterminado en Personal

  constructor(
    private formBuilder: FormBuilder,
    private loginService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.miFormulario = this.formBuilder.group({
      matricula: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  save(): void {
    const matricula = this.miFormulario.get('matricula')?.value;
    const password = this.miFormulario.get('password')?.value;

    // Verificar el tipo de inicio de sesión y llamar al método de servicio de inicio de sesión correspondiente
    if (this.isPersonalLogin) {
      this.loginService.loginPersonal(matricula, password).subscribe(
        (data: any) => {
          // Manejar la respuesta para el inicio de sesión de Personal
          localStorage.setItem('matricula', data.matricula);
          console.log('Token: ', data.token);
          if (!data.token) {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'No tienes acceso',
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            console.log(data);
            this.tokenService.setToken(data.token);
            console.log('Bienvenido Usuario');
            console.log(this.tokenService.isLogged());
            if (this.tokenService.isLogged() == true) {
              this.router.navigate(['progesopersonal']);
            } else {
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'No tienes acceso',
                showConfirmButton: false,
                timer: 1500,
              });
            }
            this.miFormulario.reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Bienvenido Usuario',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        },
        (error: any) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Algo anda mal',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    } else {
      this.loginService.loginPadres(matricula, password).subscribe(
        (data: any) => {
          // Manejar la respuesta para el inicio de sesión de Padres
          // ...
          // Si el inicio de sesión tiene éxito, redirigir al componente "Padres"
          if (data && data.token) {
            this.router.navigate(['padres']);
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'No tienes acceso',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        },
        (error: any) => {
          // Manejar error para el inicio de sesión de Padres
          // ...
        }
      );
    }
  }

  // Función para alternar entre los tipos de inicio de sesión de Personal y Padres
  toggleLoginTypePadres(): void {
    this.router.navigate(['loginpadres']);
  }

  toggleLoginTypePersonal(): void {
    this.router.navigate(['loginpersonal']);
  }

}
