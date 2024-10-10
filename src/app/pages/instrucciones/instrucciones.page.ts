import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { Instruccion } from 'src/app/interfaces/icomidas';
import { DatosService } from 'src/app/services/datos.service';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.page.html',
  styleUrls: ['./instrucciones.page.scss'],
})
export class InstruccionesPage implements OnInit {

  nombre_comida:string='';
  id_receta:string='';
  recta_obj:any;
  lista_instruc:Instruccion[]=[]
  iconofav:string="heart-outline"
  public actionSheetButtons = [
    {
      text: 'Agregar a favoritos',
      icon:this.iconofav,
      handler: () => {
        this.agregarFavorito()
      },
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
  

  constructor(private router:Router, private srv:DatosService, private db:LocaldbService) { }

  ngOnInit() {

    let xtr=this.router.getCurrentNavigation()?.extras.state;
    if (xtr!==undefined)
    {
      this.srv.getInstrucciones(xtr['id']).subscribe(datos=>{
        this.lista_instruc.push(...datos.meals);
        console.log(this.lista_instruc);
        this.id_receta=this.lista_instruc[0].idMeal;
        this.recta_obj=this.lista_instruc[0];
      });
    }
  }

  agregarFavorito(){
    this.db.set(this.id_receta,this.recta_obj);
    this.iconofav="heart"
  }

  esFavorito(){
    
  }

}
