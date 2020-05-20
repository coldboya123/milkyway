import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VegePage } from './vege.page';

const routes: Routes = [
  {
    path: '',
    component: VegePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VegePageRoutingModule {}
