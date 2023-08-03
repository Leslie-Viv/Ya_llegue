import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PersonalLogService } from 'src/app/services/personallog.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  miFormulario: FormGroup;
  isPersonalLogin: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private personalLogService: PersonalLogService // Usa el PersonalLogService
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

    if (this.isPersonalLogin) {
      this.loginService.loginPersonal(matricula, password).subscribe(
        (data: any) => {
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

            // Guardar los datos del usuario en el servicio PersonalLogService
            this.personalLogService.setCurrentUserData(data);

            console.log('Bienvenido Usuario');
            console.log(this.tokenService.isLogged());
            if (this.tokenService.isLogged() == true) {
              this.router.navigate(['homepersonal']);
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
      // ...
    }
  }

  toggleLoginTypePadres(): void {
    this.router.navigate(['loginpadres']);
  }

  toggleLoginTypePersonal(): void {
    this.router.navigate(['loginpersonal']);
  }

  registerbutton(){
    this.router.navigate(['registropersonal']);
  }
}
