import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/icomidas';
import { DatosService } from 'src/app/services/datos.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  lista:Categoria[]=[];
  
  constructor(private datossrv: DatosService) { }

  ngOnInit() {
    this.datossrv.getCategorias().subscribe(data => {
      console.log(data);
      this.lista.push(...data.categories)
      console.log("MI LISTA************");
      console.log(this.lista);
    })
  }

  verComidas(tipo_categoria:string){
    console.log(tipo_categoria);
  
  }
}
