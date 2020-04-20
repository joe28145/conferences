import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSpeaker from '../reducers/speaker.reducer';

export const selectSpeakerState = createFeatureSelector<fromSpeaker.State>(
  fromSpeaker.speakerFeatureKey
);
