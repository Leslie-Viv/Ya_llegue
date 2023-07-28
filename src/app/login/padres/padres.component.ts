import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-padres',
  templateUrl: './padres.component.html',
  styleUrls: ['./padres.component.css']
})
export class PadresComponent {

  constructor(private router: Router){}

  toggleLoginTypePadres(): void {
    this.router.navigate(['loginpadres']);
  }

  toggleLoginTypePersonal(): void {
    this.router.navigate(['loginpersonal']);
  }

}
