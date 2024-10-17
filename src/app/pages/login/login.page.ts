import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastButton, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/iusuario';
import { LocaldbService } from 'src/app/services/localdb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: Usuario = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
  }

  constructor(private db: LocaldbService,
    private router: Router,
    private toastController:ToastController,
  ) { }

  ngOnInit() {
  }

  logear() {
    console.log("Logear");
    let buscado = this.db.get(this.user.username);
    console.log(buscado);
    buscado.then(datos => {
      if (datos !== null) {
        if (this.user.username === datos.username && this.user.password === datos.password) {
          this.router.navigate(['/home']);
        }
      }
      else{
         console.log('chao');
         this.presentToast('top');
      }
     
    })
 
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      header: 'Error',
      message: 'El usuario y/o contraseña incorrecta',
      color: 'dark',
      cssClass: 'toastext',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

}
