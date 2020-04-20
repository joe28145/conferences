import { Action, createReducer, on } from '@ngrx/store';
import * as SessionActions from '../actions/session.actions';

export const sessionFeatureKey = 'session';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(SessionActions.loadSessions, state => state),
  on(SessionActions.loadSessionsSuccess, (state, action) => state),
  on(SessionActions.loadSessionsFailure, (state, action) => state),

);

