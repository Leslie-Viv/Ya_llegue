import { Component } from '@angular/core';

interface ProgresoRegistrado {
  nombre: string;
  progreso: any | null; // Cambiar a number | null
}

@Component({
  selector: 'app-padreprogreso',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreprogresoComponent {

  progresoRegistrado: ProgresoRegistrado | null = null;

  obtenerTextoProgreso(progreso: number | null): string {
    // Si progreso es null, mostramos un mensaje por defecto
    if (progreso === null) {
      return 'Progreso no registrado';
    }

    // Aquí puedes definir cómo se muestra el progreso basado en el número
    // Por ejemplo, podrías usar un switch o condicionales para devolver
    // un texto específico según el número.
    return 'Progreso: ' + progreso + '%';
  }
}
