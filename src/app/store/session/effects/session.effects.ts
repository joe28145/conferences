import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { catchError, map, concatMap, withLatestFrom, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SessionActions from '../actions/session.actions';
import { DataService } from 'src/app/core/services/data.service';
import { Store } from '@ngrx/store';
import * as SessionSelectors from '../selectors/session.selectors';

@Injectable()
export class SessionEffects {

  constructor(private actions$: Actions, private dataService: DataService, private store: Store<any>) { }

  // Load Sessions
  // Will only rehydrate store state if the current status in invalid
  @Effect()
  loadSessions$ = this.actions$.pipe(
    ofType(SessionActions.SessionActionTypes.LoadSessions),
    withLatestFrom(this.store.select(SessionSelectors.selectSessionState)),
    mergeMap(([action, SessionState]) => {
      if (!SessionState.status.valid) {
        return this.dataService.getSessions().pipe(
          map(Sessions => (new SessionActions.LoadSessionsSuccess(Sessions))),
          catchError(error => of(new SessionActions.LoadSessionsFailure(error)))
        )
      } else {
        return of(new SessionActions.LoadSessionsSuccess(SessionState.sessions))
      }
    })
  );

  // Reload Sessions
  // Effect that will always rehydrate store state
  @Effect()
  reloadSessions$ = this.actions$.pipe(
    ofType(SessionActions.SessionActionTypes.ReloadSessions),
    mergeMap(action =>
      this.dataService.getSessions().pipe(
        map(Sessions => (new SessionActions.LoadSessionsSuccess(Sessions))),
        catchError(error => of(new SessionActions.LoadSessionsFailure(error)))
      )
    )
  );

}
