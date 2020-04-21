import { createAction, props, union, Action } from '@ngrx/store';
import { Speaker } from 'src/app/shared/models/speaker.model';

export enum SpeakerActionTypes {
  LoadSpeakers = '[Speaker] Load Speakers',
  ReloadSpeakers = '[Speaker] Reload Speakers',
  LoadSpeakersSuccess = '[Speaker] Load Speakers Success',
  LoadSpeakersFailure = '[Speaker] Load Speakers Failure',
  SelectSpeaker = '[Speaker] Select Speaker',
  DeselectSpeaker= '[Speaker] Deselect Speaker'
}

export class LoadSpeakers implements Action {
  readonly type = SpeakerActionTypes.LoadSpeakers;
}

export class ReloadSpeakers implements Action {
  readonly type = SpeakerActionTypes.ReloadSpeakers;
}

export class LoadSpeakersSuccess implements Action {
  readonly type = SpeakerActionTypes.LoadSpeakersSuccess;

  constructor(public speakers: Speaker[]){}
}

export class LoadSpeakersFailure implements Action {
  readonly type = SpeakerActionTypes.LoadSpeakersFailure;

  constructor(public error: Error){}
}

export class SelectSpeaker implements Action {
  readonly type = SpeakerActionTypes.SelectSpeaker;

  constructor(public id: string){}
}

export class DeselectSpeaker implements Action {
  readonly type = SpeakerActionTypes.DeselectSpeaker;
}

export type SpeakerActions = 
LoadSpeakers
| ReloadSpeakers
| LoadSpeakersSuccess
| LoadSpeakersFailure
| SelectSpeaker
| DeselectSpeaker;



// !!!!!!!!!!!!!!!!!!!!!!!!!!!
// New way of creating actions

// export const loadSpeakers = createAction(
//   '[Speaker] Load Speakers'
// );

// export const loadSpeakersSuccess = createAction(
//   '[Speaker] Load Speakers Success',
//   props<{speakers: Speaker[]}>()
// );

// export const loadSpeakersFailure = createAction(
//   '[Speaker] Load Speakers Failure',
//   props<{ error: any }>()
// );

// const actions = union({
//   loadSpeakers,
//   loadSpeakersSuccess,
//   loadSpeakersFailure
// });

// export type SpeakerActionsUnion = typeof actions;

