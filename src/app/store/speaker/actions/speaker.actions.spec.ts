import * as fromSpeaker from './speaker.actions';

describe('loadSpeakers', () => {
  it('should return an action', () => {
    expect(fromSpeaker.loadSpeakers().type).toBe('[Speaker] Load Speakers');
  });
});
