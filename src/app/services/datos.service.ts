import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias, Comidas, Instrucciones } from '../interfaces/icomidas';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private httpclient:HttpClient) { }

  getCategorias(){
    return this.httpclient.get<Categorias>(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }

  getComidasxCategoria(categoria: string){
    return this.httpclient.get<Comidas>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`);
  }

  getInstrucciones(id:string){
    return this.httpclient.get<Instrucciones>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }

}
