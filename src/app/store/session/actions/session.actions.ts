import { createAction, props } from '@ngrx/store';

export const loadSessions = createAction(
  '[Session] Load Sessions'
);

export const loadSessionsSuccess = createAction(
  '[Session] Load Sessions Success',
  props<{ data: any }>()
);

export const loadSessionsFailure = createAction(
  '[Session] Load Sessions Failure',
  props<{ error: any }>()
);
