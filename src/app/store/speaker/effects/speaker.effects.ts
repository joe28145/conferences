import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import * as SpeakerActions from '../actions/speaker.actions';
import { DataService } from 'src/app/core/services/data.service';
import { Store, select } from '@ngrx/store';
import * as SpeakerSelectors from '../selectors/speaker.selectors';


@Injectable()
export class SpeakerEffects {

  constructor(private actions$: Actions, private dataService: DataService, private store: Store<any>) { }

  // Will only rehydrate store state if the current status in invalid
  @Effect()
  loadSpeakers$ = this.actions$.pipe(
    ofType(SpeakerActions.SpeakerActionTypes.LoadSpeakers),
    withLatestFrom(this.store.select(SpeakerSelectors.selectSpeakerState)),
    mergeMap(([action, speakerState]) => {
      if (!speakerState.status.valid) {
        return this.dataService.getSpeakers().pipe(
          map(speakers => (new SpeakerActions.LoadSpeakersSuccess(speakers))),
          catchError(error => of(new SpeakerActions.LoadSpeakersFailure(error)))
        )
      } else {
        return of(new SpeakerActions.LoadSpeakersSuccess(speakerState.speakers))
      }
    })
  );

  // Effect that will always rehydrate store state

  // @Effect()
  // loadSpeakers$ = this.actions$.pipe(
  //   ofType(SpeakerActions.SpeakerActionTypes.LoadSpeakers),
  //   mergeMap(action =>
  //     this.dataService.getSpeakers().pipe(
  //       map(speakers => (new SpeakerActions.LoadSpeakersSuccess(speakers))),
  //       catchError(error => of(new SpeakerActions.LoadSpeakersFailure(error)))
  //     )
  //   )
  // );

}
