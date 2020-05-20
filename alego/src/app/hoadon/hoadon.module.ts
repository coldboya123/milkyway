import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoadonPageRoutingModule } from './hoadon-routing.module';

import { HoadonPage } from './hoadon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoadonPageRoutingModule
  ],
  declarations: [HoadonPage]
})
export class HoadonPageModule {}
