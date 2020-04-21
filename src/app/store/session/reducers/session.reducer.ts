import { SessionActions, SessionActionTypes } from '../actions/session.actions';
import { Status } from 'src/app/shared/models/status.model';
import * as _ from 'lodash';
import { Session } from 'src/app/shared/models/session.model';

export const sessionFeatureKey = 'session';

export interface State {
  sessions: Session[];
  currentSessionId: string;
  status: Status
}

export const intitialSessionState: State = {
  sessions: [],
  currentSessionId: null,
  status: {
    loading: false,
    valid: false,
    failed: false,
    error: null
  }
};

export function reducer(state: State = intitialSessionState, action: SessionActions): State {
  switch (action.type) {

    // Load Sessions
    case SessionActionTypes.LoadSessions || SessionActionTypes.ReloadSessions: {
      return {
        ...state,
        status: {
          ...state.status,
          loading: true
        }
      }
    }

    // Load Sessions Success
    case SessionActionTypes.LoadSessionsSuccess: {
      return {
        ...state,
        sessions: _.cloneDeep(action.sessions),
        status: {
          loading: false,
          valid: true,
          failed: false,
          error: null
        }
      }
    }

    // Load Sessions Failure
    case SessionActionTypes.LoadSessionsFailure: {
      return {
        ...state,
        sessions: [],
        status: {
          loading: false,
          valid: false,
          failed: true,
          error: _.cloneDeep(action.error)
        }
      }
    }

    // Select Session
    case SessionActionTypes.SelectSession: {
      return {
        ...state,
        currentSessionId: action.id
      }
    }

    // Deselect Session
    case SessionActionTypes.DeselectSession: {
      return {
        ...state,
        currentSessionId: null
      }
    }

    default: {
      return {
        ...state
      }
    }

  }
}

