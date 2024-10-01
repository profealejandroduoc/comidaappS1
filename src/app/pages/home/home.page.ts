import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private datossrv: DatosService) { }

  ngOnInit() {
    this.datossrv.getCategorias().subscribe(data => {
      console.log(data);
    })
  }

}
