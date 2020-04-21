import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSession from '../reducers/session.reducer';
import * as _ from 'lodash';

export const selectSessionState = createFeatureSelector<fromSession.State>(
  fromSession.sessionFeatureKey
);

// Sessions
export const getSessions = createSelector(
  selectSessionState,
  state => state.sessions
);

// Current Session Id
export const getCurrentSessionId = createSelector(
  selectSessionState,
  state => state.currentSessionId
);

// Current Session
export const getCurrentSession = createSelector(
  selectSessionState,
  state => _.find(state.sessions, (Session) => Session.id === state.currentSessionId)
);

// Session Status
export const getSessionsStatus = createSelector(
  selectSessionState,
  state => state.status
);