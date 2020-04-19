import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let homeComponent: HomeComponent;

  beforeEach(() => {
    homeComponent = new HomeComponent();
  });

  describe('animateSpeakers', () => {
    it('should show the speakers', () => {
      homeComponent.showSpeakers = false;
      
      homeComponent.animateSpeakers(true);
      expect(homeComponent.showSpeakers).toEqual(true);
    });

    it('should hide the speakers', () => {
      homeComponent.showSpeakers = true;
      
      homeComponent.animateSpeakers(false);
      expect(homeComponent.showSpeakers).toEqual(false);
    });
  });

  describe('animateSessions', () => {
    it('should show the sessions', () => {
      homeComponent.showSessions = false;
      
      homeComponent.animateSessions(true);
      expect(homeComponent.showSessions).toEqual(true);
    });

    it('should hide the sessions', () => {
      homeComponent.showSessions = true;
      
      homeComponent.animateSessions(false);
      expect(homeComponent.showSessions).toEqual(false);
    });
  });
});
