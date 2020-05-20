import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuaPage } from './sua.page';

const routes: Routes = [
  {
    path: '',
    component: SuaPage,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () => import('../hoadon/hoadon.module').then(m=>m.HoadonPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuaPageRoutingModule {}
