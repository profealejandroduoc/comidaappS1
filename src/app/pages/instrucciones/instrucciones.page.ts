import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
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
  public actionSheetButtons = [
    {
      text: 'Agregar a favoritos',
      icon:"heart-outline",
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Compartir',
      icon:"share-social",
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  

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
