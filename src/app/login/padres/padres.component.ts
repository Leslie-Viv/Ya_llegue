import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-padres',
  templateUrl: './padres.component.html',
  styleUrls: ['./padres.component.css']
})
export class PadresComponent {
  miFormulario: FormGroup;
  isPersonalLogin: boolean = true;
  
  constructor(
    private formBuilder: FormBuilder,
    private loginService: AuthService,
    private router: Router,
    private tokenService: TokenService,
  ) {
    this.miFormulario = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  save(): void {
    const username = this.miFormulario.get('username')?.value;
    const password = this.miFormulario.get('password')?.value;

    if (this.isPersonalLogin) {
      this.loginService.loginPadres(username, password).subscribe(
        (data: any) => {
          localStorage.setItem('username', data.matricula);
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

            console.log('Bienvenido Usuario');
            console.log(this.tokenService.isLogged());
            if (this.tokenService.isLogged() == true) {
              this.router.navigate(['homepadres/', 9]);
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
    this.router.navigate(['registropadres']);
  }
}
