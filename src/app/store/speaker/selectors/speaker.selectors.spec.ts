import * as fromSpeaker from '../reducers/speaker.reducer';
import { selectSpeakerState } from './speaker.selectors';

describe('Speaker Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSpeakerState({
      [fromSpeaker.speakerFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
