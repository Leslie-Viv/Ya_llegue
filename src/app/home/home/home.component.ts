import { Component } from '@angular/core';
import { ProgressService } from 'src/app/services/progress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentStep: number = 1;

  constructor(private progressService: ProgressService) {
    // Inicia el cambio automático cada 3 segundos (3000 ms)
    setInterval(() => {
      this.currentStep = (this.currentStep % 4) + 1; // Se asegura de que currentStep esté en el rango de 1 a 4
      this.progressService.updateProgress(this.currentStep); // Actualiza el progreso en el servicio
    }, 3000);
  }
}
