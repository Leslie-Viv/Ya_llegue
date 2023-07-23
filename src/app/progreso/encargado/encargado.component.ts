import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode'; // Importa el módulo correcto

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoprogresoComponent {

  currentStep: number = 1;

  nombre: string = '';
  llegoEscuela: boolean = false;
  enClase: boolean = false;
  terminoClases: boolean = false;
  entregadoResponsable: boolean = false;
  codigoQR: string | null = null;

  constructor(private formBuilder: FormBuilder) { }

  registrarProgreso() {
    // Aquí puedes guardar los datos del progreso del niño en el backend
    // y luego generar el código QR para el padre
    this.generarCodigoQR();

    // Actualizar automáticamente la barra de progreso
    this.currentStep = this.entregadoResponsable ? 4 : this.terminoClases ? 3 : this.enClase ? 2 : this.llegoEscuela ? 1 : 0;
  }

  generarCodigoQR() {
    // Genera el código QR utilizando angularx-qrcode
    const progreso = {
      nombre: this.nombre,
      llegoEscuela: this.llegoEscuela,
      enClase: this.enClase,
      terminoClases: this.terminoClases,
      entregadoResponsable: this.entregadoResponsable
    };
    this.codigoQR = JSON.stringify(progreso);
  }
}
