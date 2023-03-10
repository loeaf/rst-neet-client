import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RstInfoComponent } from './rst-info.component';
import { IonicModule } from '@ionic/angular';
import { RstButtonComponent } from '../../../component/rst-button/rst-button.component';
import { TasteRoomListModule } from '../../../component/taste-room-list/taste-room-list.module';
import {
  CreateTasteRoomContentModule
} from '../../tabs/tab1/create-taste-room-content/create-taste-room-content.module';



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
