import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HijosService } from '../services/hijos.service';

@Component({
  selector: 'app-tutoresdispo',
  templateUrl: './tutoresdispo.component.html',
  styleUrls: ['./tutoresdispo.component.css']
})
export class TutoresdispoComponent {
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


  editar(){
    const idHijo:any=this.route.snapshot.paramMap.get('id');
    
  }
}



