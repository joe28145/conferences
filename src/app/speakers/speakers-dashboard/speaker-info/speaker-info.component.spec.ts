import { SpeakerInfoComponent } from './speaker-info.component';
import * as SpeakerConstants from '../../../../test-constants/speaker-constants';

describe('SpeakerInfoComponent', () => {
  let speakerInfoComponent: SpeakerInfoComponent;

  beforeEach(() => {
    speakerInfoComponent = new SpeakerInfoComponent();
    speakerInfoComponent.speaker = SpeakerConstants.speaker;
    
    speakerInfoComponent.ngOnInit();
  });

  describe('ngOnInit', () => {
    it('should initialize', () => {
      speakerInfoComponent.ngOnInit();
    });
  });
});
