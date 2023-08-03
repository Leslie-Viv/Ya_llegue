import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-padresr',
  templateUrl: './padresr.component.html',
  styleUrls: ['./padresr.component.css']
})
export class PadresrComponent {

  constructor( private router: Router){}

  onFileSelected(){
    
  }

  returnlogin(){
    this.router.navigate(['loginpadres'])
  }

}
