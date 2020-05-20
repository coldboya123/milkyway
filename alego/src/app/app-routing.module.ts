import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bo',
    loadChildren: () => import('./bo/bo.module').then( m => m.BoPageModule)
  },
  {
    path: 'sua',
    loadChildren: () => import('./sua/sua.module').then( m => m.SuaPageModule)
  },
  {
    path: 'rau',
    loadChildren: () => import('./rau/rau.module').then( m => m.RauPageModule)
  },
  {
    path: 'hoadon',
    loadChildren: () => import('./hoadon/hoadon.module').then(m =>m.HoadonPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
