import { Component, OnInit } from '@angular/core';
import { PersonalLogService } from 'src/app/services/personallog.service';
import { HijosService } from '../services/hijos.service';

@Component({
  selector: 'app-homepersonal',
  templateUrl: './homepersonal.component.html',
  styleUrls: ['./homepersonal.component.css'],
})
export class HomePersonalComponent implements OnInit {
  currentUserData: any | null = null;
  hijos:any=[]
  constructor(private hijoS:HijosService) {}

  ngOnInit(): void {
    
    this.hijoS.gethijos().subscribe(data=>{
      this.hijos=data
    })
  }
}
