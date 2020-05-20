import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuaPageRoutingModule } from './sua-routing.module';

import { SuaPage } from './sua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuaPageRoutingModule
  ],
  declarations: [SuaPage]
})
export class SuaPageModule {}
