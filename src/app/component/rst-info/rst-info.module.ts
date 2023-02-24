import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RstInfoComponent } from './rst-info.component';
import { IonicModule } from '@ionic/angular';
import { TasteRoomListModule } from '../taste-room-list/taste-room-list.module';
import { CreateTasteRoomContentModule } from '../../layout/tabs/tab1/create-taste-room-content/create-taste-room-content.module';
import { RstButtonComponent } from '../rst-button/rst-button.component';



@NgModule({
  declarations: [RstInfoComponent, RstButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
    TasteRoomListModule,
    CreateTasteRoomContentModule
  ],
  exports: [RstInfoComponent, RstButtonComponent]
})
export class RstInfoModule { }
