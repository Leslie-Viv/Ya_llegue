import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PadresService } from '../services/padres.service';

@Component({
  selector: 'app-homepadres',
  templateUrl: './homepadres.component.html',
  styleUrls: ['./homepadres.component.css']
})
export class HomepadresComponent implements OnInit {
  elemento:any=[];
  hijos:any={};

  constructor(private route:ActivatedRoute,
    private padresS:PadresService,
    private router: Router ){}

  ngOnInit(): void {
    const padreId:any = this.route.snapshot.paramMap.get('id');
    this.padresS.getpadre(padreId).subscribe(
      (data)=> {
        this.elemento= data;
      })
  }

  gethijos(){
    this.padresS.gethijos(this.elemento.id).subscribe(data=>{
      this.hijos=data
    })
  }
}
