import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { Instruccion } from 'src/app/interfaces/icomidas';
import { DatosService } from 'src/app/services/datos.service';
import { LocaldbService } from 'src/app/services/localdb.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.page.html',
  styleUrls: ['./instrucciones.page.scss'],
})
export class InstruccionesPage implements OnInit {


  //infav:boolean=false;


  lista_instruc: Instruccion[] = []

  id_instrucciones: string = '';

  estadofav = false;

  id_comida: string = ''


  constructor(private router: Router, private srv: DatosService, private db: LocaldbService, private actionSheetController: ActionSheetController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Favorito',
          icon: this.getIcon(),
          handler: () => {
            console.log('Favorito clicked');
            this.agregarFav();
          }
        }, {
          text: 'Compartir',
          icon: 'share-social',
          handler: () => {
            console.log('Cancelar clicked');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancelar clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  ngOnInit() {
    console.clear();

    let xtr = this.router.getCurrentNavigation()?.extras.state;
    if (xtr !== undefined) {
      this.srv.getInstrucciones(xtr['id']).subscribe(datos => {
        this.lista_instruc.push(...datos.meals);
        this.id_instrucciones = this.lista_instruc[0].idMeal;
        this.id_comida = this.lista_instruc[0].idMeal;
        this.buscarFav(this.id_comida);
      });
    }
  }

  buscarFav(id: string) {
    console.log('buscarfav');
    let valor = this.db.get(id);
    //Solo para mostrar en consola
    valor.then(datos => {
      console.log(datos);
      if (datos !== null) {
        this.estadofav = true;
      }
      else {
        this.estadofav = false;
      }

    })


  }

  getIcon() {
    console.log("desde get icon");
    //const tf=this.getData();
    if (this.estadofav === true) {
      return 'heart';
    }
    else {
      return 'heart-outline';
    }
  }

  agregarFav() {
    if (this.estadofav === false) {
      this.db.set(this.id_comida, this.lista_instruc[0]);
      this.estadofav = true;
    }
    else {
      this.db.remover(this.lista_instruc[0].idMeal);
      this.estadofav = false;

    }
    this.getIcon();

  }


}
