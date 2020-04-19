import { SessionInfoComponent } from './session-info.component';
import * as SessionConstants from '../../../../test-constants/session-constants';
import * as SpeakerConstants from '../../../../test-constants/speaker-constants';

describe('SessionInfoComponent', () => {
  let sessionInfoComponent: SessionInfoComponent;

  beforeEach(() => {
    sessionInfoComponent = new SessionInfoComponent();
    sessionInfoComponent.session = SessionConstants.session;
    sessionInfoComponent.speaker = SpeakerConstants.speaker;
    sessionInfoComponent.ngOnInit();
  });

  describe('ngOnInit', () => {
    it('should initialize', () => {
      sessionInfoComponent.ngOnInit();
    });
  })
});
