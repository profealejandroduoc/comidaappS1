import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/icomidas';
import { DatosService } from 'src/app/services/datos.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  lista:Categoria[]=[];
  public loaded = false;
  constructor(private datossrv: DatosService, private router:Router) { }

  async ngOnInit() {
    await this.sleep(1000);
    this.datossrv.getCategorias().subscribe(data => {
      
    
      console.log(data);
      this.lista.push(...data.categories)
      console.log("MI LISTA************");
      console.log(this.lista);
    })
    this.loaded=true;

  }

  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  verComidas(tipo_categoria:string){
    console.log(tipo_categoria);
    let xtrs:NavigationExtras={
      state:{
        tipo_cat:tipo_categoria,
        
      }
    }
    this.router.navigate(['/comidas'],xtrs)
  }
}
