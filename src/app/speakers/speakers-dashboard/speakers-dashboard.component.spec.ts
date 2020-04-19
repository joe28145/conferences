import { SpeakersDashboardComponent } from './speakers-dashboard.component';
import * as SpeakerConstants from '../../../test-constants/speaker-constants';

describe('SpeakersDashboardComponent', () => {
  let speakersDashboardComponent: SpeakersDashboardComponent;

  beforeEach(() => {
    speakersDashboardComponent = new SpeakersDashboardComponent();
    speakersDashboardComponent.speakers = SpeakerConstants.speakers;

    speakersDashboardComponent.ngOnInit();
  });

  describe('ngOnInit', () => {
    it('should initialize', () => {
      speakersDashboardComponent.ngOnInit();
    });
  });
});
