import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromSpeaker from './reducers/speaker.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SpeakerEffects } from './effects/speaker.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSpeaker.speakerFeatureKey, fromSpeaker.reducer),
    EffectsModule.forFeature([SpeakerEffects])
  ]
})
export class SpeakerStoreModule { }
