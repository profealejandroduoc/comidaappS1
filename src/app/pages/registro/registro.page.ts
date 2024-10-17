import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/iusuario';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user: Usuario = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
  }

  constructor(private db: LocaldbService,
    private toastController: ToastController,
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
  }

  registrar() {
    let buscado = this.db.get(this.user.username);
    console.log("PROMISE");
    console.log(buscado);
    buscado.then(datos => {
      console.log("OBJETO");
      console.log(datos);

      if (datos === null) {

        this.db.set(this.user.username, this.user);
        this.presentAlert();
      }
      else {
        console.log("YA EXISTE!!!!");
        this.presentToast('top');
      }
    })



  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      header: 'Error',
      message: 'El usuario ya existe!!',
      color: 'dark',
      cssClass: 'toastext',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario Creado',

      message: 'Puede acceder a la aplicación',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.router.navigate(['/login']);

        }
      }]
    });

    await alert.present();
  }

}
