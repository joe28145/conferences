import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SessionActions from '../actions/session.actions';



@Injectable()
export class SessionEffects {

  loadSessions$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SessionActions.loadSessions),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SessionActions.loadSessionsSuccess({ data })),
          catchError(error => of(SessionActions.loadSessionsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
