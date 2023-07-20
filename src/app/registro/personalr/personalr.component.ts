import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-personalr',
  templateUrl: './personalr.component.html',
  styleUrls: ['./personalr.component.css']
})
export class PersonalrComponent {

  EscuelaData: any = {};

  constructor(private authService: AuthService){}

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

  onFileSelected(){}
}
