import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HoadonPage } from '../hoadon/hoadon.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren : ()=>import('../bo/bo.module').then(m=>m.BoPageModule)
          }
        ]
      },
      {
        path: 'bo',
        children: [
          {
            path: '',
            loadChildren : ()=>import('../bo/bo.module').then(m=>m.BoPageModule)
          }
        ]
      },
      {
        path: 'sua',
        children: [
          {
            path: '',
            loadChildren : ()=>import('../sua/sua.module').then(m => m.SuaPageModule)
          }
        ]
      },
      {
        path: 'rau',
        children: [
          {
            path: '',
            loadChildren: ()=> import('../rau/rau.module').then(m=>m.RauPageModule)
          }
        ]
      },
      {
        path: 'hoadon',
        children: [
          {
            path: '',
            loadChildren: ()=> import ('../hoadon/hoadon.module').then(m=>m.HoadonPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'bo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
