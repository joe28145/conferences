import * as fromSession from '../reducers/session.reducer';
import { selectSessionState } from './session.selectors';

describe('Session Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSessionState({
      [fromSession.sessionFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
