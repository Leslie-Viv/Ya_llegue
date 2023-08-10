import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HijosService } from '../services/hijos.service';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent implements OnInit{
  elemento:any=[];
  
  constructor(private route:ActivatedRoute,
    private hijoS:HijosService ){}

  ngOnInit(): void {
    const hijoId:any = this.route.snapshot.paramMap.get('id');
    this.elemento= this.hijoS.gethijo(hijoId)
    console.log("hola",this.elemento);
    
    /* this.hijoS.gethijo(hijoId).subscribe(data=>{
      this.elemento=data
      console.log(this.elemento);
    }) */
    
    
  }
}
