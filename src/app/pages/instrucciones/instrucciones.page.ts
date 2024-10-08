import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instruccion } from 'src/app/interfaces/icomidas';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.page.html',
  styleUrls: ['./instrucciones.page.scss'],
})
export class InstruccionesPage implements OnInit {

  nombre_comida:string=''
  lista_instruc:Instruccion[]=[]

  

  constructor(private router:Router, private srv:DatosService) { }

  ngOnInit() {

    let xtr=this.router.getCurrentNavigation()?.extras.state;
    if (xtr!==undefined)
    {
      this.srv.getInstrucciones(xtr['id']).subscribe(datos=>{
        this.lista_instruc.push(...datos.meals);
        console.log(this.lista_instruc);
      })

     

    }
  }



}
