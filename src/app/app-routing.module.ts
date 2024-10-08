import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'comidas',
    loadChildren: () => import('./pages/comidas/comidas.module').then( m => m.ComidasPageModule)
  },
  {
    path: 'instrucciones',
    loadChildren: () => import('./pages/instrucciones/instrucciones.module').then( m => m.InstruccionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
