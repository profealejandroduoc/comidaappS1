import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Comida } from '../../interfaces/icomidas';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.page.html',
  styleUrls: ['./comidas.page.scss'],
})
export class ComidasPage implements OnInit {

  comidas:string="";
  lista_comidas:Comida[]=[];

  constructor(private router:Router, private servicio:DatosService) { }

  ngOnInit() {
    let categoria=this.router.getCurrentNavigation()?.extras.state
    if(categoria!==undefined){
      this.comidas=categoria["tipo_cat"];
      this.servicio.getComidasxCategoria(categoria["tipo_cat"]).subscribe(datos=>{
        this.lista_comidas.push(...datos.meals);
        console.log(this.lista_comidas);
      })
      
    }
  }

  verInstrucciones(id:string){
    console.log(id);
    let xtras:NavigationExtras={
      state:{
        id:id
      }
    }

    this.router.navigate(['instrucciones/'],xtras);

  }
}
