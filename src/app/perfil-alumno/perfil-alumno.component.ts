import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HijosService } from '../services/hijos.service';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent implements OnInit{
  elemento:any=[];
  
  constructor(private route:ActivatedRoute,
    private hijoS:HijosService,
    private router: Router ){}

  ngOnInit(): void {
    const hijoId:any = this.route.snapshot.paramMap.get('id');
    this.hijoS.gethijo(hijoId).subscribe(
      (data)=> {
        this.elemento= data;
      }
    )
  }
  eliminar(id:any){
    const idHijo:any=this.route.snapshot.paramMap.get('id');
    this.hijoS.eliminarHijo(idHijo).subscribe(
      ()=>{
        this.router.navigate(['/homepersonal'])
      },
      (error)=>{
        console.log('Error al eliminar el elemento:', error);
        
      }
    )
  }



}
