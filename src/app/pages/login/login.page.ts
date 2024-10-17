import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/iusuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:Usuario={
    username:'',
    password:'',
    nombre:'',
    apellido:'',
  }

  constructor() { }

  ngOnInit() {
  }

  logear(){

  }

}
