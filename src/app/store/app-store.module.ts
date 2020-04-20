import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerStoreModule } from './speaker/speaker-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpeakerStoreModule
  ],
  exports: [
    SpeakerStoreModule
  ]
})
export class AppStoreModule { }
