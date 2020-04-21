import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import * as fromSpeaker from '../reducers/speaker.reducer';
import * as _ from 'lodash';

export const selectSpeakerState = createFeatureSelector<fromSpeaker.State>(
  fromSpeaker.speakerFeatureKey
);

// Speakers
export const getSpeakers = createSelector(
  selectSpeakerState,
  state => state.speakers
);

// Current Speaker Id
export const getCurrentSpeakerId = createSelector(
  selectSpeakerState,
  state => state.currentSpeakerId
);

// Current Speaker
export const getCurrentSpeaker = createSelector(
  selectSpeakerState,
  state => _.find(state.speakers, (speaker) => speaker.id === state.currentSpeakerId)
);

// Speaker Status
export const getSpeakersStatus = createSelector(
  selectSpeakerState,
  state => state.status
);
