import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerStoreModule } from './speaker/speaker-store.module';
import { SessionStoreModule } from './session/session-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpeakerStoreModule,
    SessionStoreModule
  ],
  exports: [
    SpeakerStoreModule,
    SessionStoreModule
  ]
})
export class AppStoreModule { }
