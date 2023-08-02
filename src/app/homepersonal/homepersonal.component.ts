import { Component, OnInit } from '@angular/core';
import { PersonalLogService } from 'src/app/services/personallog.service';

@Component({
  selector: 'app-homepersonal',
  templateUrl: './homepersonal.component.html',
  styleUrls: ['./homepersonal.component.css'],
})
export class HomePersonalComponent implements OnInit {
  currentUserData: any | null = null;

  constructor(private personalLogService: PersonalLogService) {}

  ngOnInit(): void {
    // Obtener los datos del usuario del servicio PersonalLogService
    this.currentUserData = this.personalLogService.getCurrentUserData();
  }
}
