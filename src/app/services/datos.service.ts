import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private httpclient:HttpClient) { }

  getCategorias(){
    return this.httpclient.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }

}
