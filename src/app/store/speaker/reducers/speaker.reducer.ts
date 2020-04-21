import { Speaker } from 'src/app/shared/models/speaker.model';
import { Status } from 'src/app/shared/models/status.model';
import { SpeakerActions, SpeakerActionTypes } from '../actions/speaker.actions';
import * as _ from 'lodash';

export const speakerFeatureKey = 'speaker';

export interface State {
  speakers: Speaker[];
  currentSpeakerId: string;
  status: Status
}

export const initialSpeakerState: State = {
  speakers: [],
  currentSpeakerId: null,
  status: {
    loading: false,
    valid: false,
    failed: false,
    error: null
  }
};

export function reducer(state: State = initialSpeakerState, action: SpeakerActions): State {
  switch (action.type) {

    // Load Speakers
    case SpeakerActionTypes.LoadSpeakers || SpeakerActionTypes.ReloadSpeakers: {
      return {
        ...state,
        status: {
          ...state.status,
          loading: true
        }
      }
    }

    // Load Speakers Success
    case SpeakerActionTypes.LoadSpeakersSuccess: {
      return {
        ...state,
        speakers: _.cloneDeep(action.speakers),
        status: {
          loading: false,
          valid: true,
          failed: false,
          error: null
        }
      }
    }

    // Load Speakers Failure
    case SpeakerActionTypes.LoadSpeakersFailure: {
      return {
        ...state,
        speakers: [],
        status: {
          loading: false,
          valid: false,
          failed: true,
          error: _.cloneDeep(action.error)
        }
      }
    }

    // Select Speaker
    case SpeakerActionTypes.SelectSpeaker: {
      return {
        ...state,
        currentSpeakerId: action.id
      }
    }

    // Deselect Speaker
    case SpeakerActionTypes.DeselectSpeaker: {
      return {
        ...state,
        currentSpeakerId: null
      }
    }

    default: {
      return {
        ...state
      }
    }

  }
}

