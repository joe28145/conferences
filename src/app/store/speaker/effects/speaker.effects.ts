import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as SpeakerActions from '../actions/speaker.actions';


@Injectable()
export class SpeakerEffects {


  loadSpeakers$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SpeakerActions.loadSpeakers),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(private actions$: Actions) {}

}
