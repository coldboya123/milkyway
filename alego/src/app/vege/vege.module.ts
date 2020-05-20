import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VegePageRoutingModule } from './vege-routing.module';

import { VegePage } from './vege.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VegePageRoutingModule
  ],
  declarations: [VegePage]
})
export class VegePageModule {}
