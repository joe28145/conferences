import { SessionsComponent } from './sessions.component';
import * as SessionConstants from '../../test-constants/session-constants';
import * as SpeakerConstants from '../../test-constants/speaker-constants';
import { of } from 'rxjs';

describe('SessionsComponent', () => {
  let sessionsComponent: SessionsComponent;
  let dataService;

  beforeEach(() => {
    dataService = jasmine.createSpyObj(['getSessions', 'getSpeakers']);
    dataService.getSessions.and.returnValue(of(SessionConstants.sessions));
    dataService.getSpeakers.and.returnValue(of(SpeakerConstants.speakers));

    sessionsComponent = new SessionsComponent(dataService);
    sessionsComponent.ngOnInit();
  });

  describe('ngOnInit', () => {
    it('should intialize', () => {
      sessionsComponent.ngOnInit();
      expect(dataService.getSessions).toHaveBeenCalled();
      expect(dataService.getSpeakers).toHaveBeenCalled();
    });
  });
});
