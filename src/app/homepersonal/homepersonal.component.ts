import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PersonalLogService } from '../services/personallog.service';
// Importa el UserService

@Component({
  selector: 'app-homepersonal',
  templateUrl: './homepersonal.component.html',
  styleUrls: ['./homepersonal.component.css'],
})
export class HomePersonalComponent implements OnInit {
  personalInfo: any;

  constructor(private personalLogService: PersonalLogService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getPersonalInfo();
  }

  getPersonalInfo(): void {
    this.personalLogService.getPersonalInfo().subscribe(
      (data) => {
        this.personalInfo = data;
        // Aquí puedes hacer cualquier procesamiento adicional con los datos recibidos
        // Forzar la detección de cambios para actualizar la vista
        this.cdRef.detectChanges();
      },
      (error) => {
        console.error('Error al obtener la información del servidor:', error);
      }
    );
  }
}