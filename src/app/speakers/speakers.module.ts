import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers.component';
import { SpeakersDashboardComponent } from './speakers-dashboard/speakers-dashboard.component';
import { RouterModule } from '@angular/router';
import { SpeakerInfoComponent } from './speakers-dashboard/speaker-info/speaker-info.component';
import { AppStoreModule } from '../store/app-store.module';

const speakersRoutes = [
  {path: '', component: SpeakersComponent}
];

@NgModule({
  declarations: [SpeakersComponent, SpeakersDashboardComponent, SpeakerInfoComponent],
  imports: [
    RouterModule.forChild(speakersRoutes),
    CommonModule,
    AppStoreModule
  ],
  exports: []
})
export class SpeakersModule { }
