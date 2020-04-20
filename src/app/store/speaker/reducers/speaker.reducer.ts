import { Action, createReducer, on } from '@ngrx/store';
import * as SpeakerActions from '../actions/speaker.actions';
import { Speaker } from 'src/app/shared/models/speaker.model';
import { Status } from 'src/app/shared/models/status.model';

export const speakerFeatureKey = 'speaker';

export interface SpeakerState {
  speakers: Speaker[];
  status: Status
}

export const initialState: SpeakerState = {
  speakers: [],
  status: {
    loading: false,
    valid: false,
    failed: false,
    errorMessage: null
  }
};

export const reducer = createReducer(
  initialState,

  on(SpeakerActions.loadSpeakers, state => state),

);

