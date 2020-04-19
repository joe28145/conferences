import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersComponent } from './speakers.component';
import { SpeakersDashboardComponent } from './speakers-dashboard/speakers-dashboard.component';
import { RouterModule } from '@angular/router';
import { SpeakerInfoComponent } from './speakers-dashboard/speaker-info/speaker-info.component';

const speakersRoutes = [
  {path: '', component: SpeakersComponent}
];

@NgModule({
  declarations: [SpeakersComponent, SpeakersDashboardComponent, SpeakerInfoComponent],
  imports: [
    RouterModule.forChild(speakersRoutes),
    CommonModule
  ],
  exports: []
})
export class SpeakersModule { }
