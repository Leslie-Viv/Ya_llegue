import { Component, OnInit } from '@angular/core';
import { PersonalLogService } from 'src/app/services/personallog.service';
@Component({
  selector: 'app-perfilpersonal',
  templateUrl: './perfilpersonal.component.html',
  styleUrls: ['./perfilpersonal.component.css']
})
export class PerfilpersonalComponent implements OnInit {
  currentUserData: any | null = null;

  constructor(private personalLogService: PersonalLogService) {}

  ngOnInit(): void {
    // Obtener los datos del usuario del servicio PersonalLogService
    this.currentUserData = this.personalLogService.getCurrentUserData();
  }
}
