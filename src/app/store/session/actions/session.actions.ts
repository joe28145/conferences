import { Action } from '@ngrx/store';
import { Session } from 'src/app/shared/models/session.model';

export enum SessionActionTypes {
  LoadSessions = '[Session] Load Sessions',
  ReloadSessions = '[Session] Reload Sessions',
  LoadSessionsSuccess = '[Session] Load Sessions Success',
  LoadSessionsFailure = '[Session] Load Sessions Failure',
  SelectSession = '[Session] Select Session',
  DeselectSession = '[Session] Deselect Session'
}

export class LoadSessions implements Action {
  readonly type = SessionActionTypes.LoadSessions;
}

export class ReloadSessions implements Action {
  readonly type = SessionActionTypes.ReloadSessions;
}

export class LoadSessionsSuccess implements Action {
  readonly type = SessionActionTypes.LoadSessionsSuccess;

  constructor(public sessions: Session[]){}
}

export class LoadSessionsFailure implements Action {
  readonly type = SessionActionTypes.LoadSessionsFailure;

  constructor(public error: Error){}
}

export class SelectSession implements Action {
  readonly type = SessionActionTypes.SelectSession;

  constructor(public id: string){}
}

export class DeselectSession implements Action {
  readonly type = SessionActionTypes.DeselectSession;
}

export type SessionActions = 
LoadSessions
| ReloadSessions
| LoadSessionsSuccess
| LoadSessionsFailure
| SelectSession
| DeselectSession;
