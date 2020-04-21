import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SpeakerEffects } from './speaker.effects';

describe('SpeakerEffects', () => {
  let actions$: Observable<any>;
  let effects: SpeakerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpeakerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<SpeakerEffects>(SpeakerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
