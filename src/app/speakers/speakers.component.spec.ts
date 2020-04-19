import { SpeakersComponent } from './speakers.component';
import { of } from 'rxjs';
import * as SpeakerConstants from '../../test-constants/speaker-constants';

describe('SpeakersComponent', () => {
  let speakersComponent: SpeakersComponent;
  let dataService;

  beforeEach(() => {
    dataService = jasmine.createSpyObj(['getSpeakers']);
    dataService.getSpeakers.and.returnValue(of(SpeakerConstants.speakers));

    speakersComponent = new SpeakersComponent(dataService);
    speakersComponent.ngOnInit();
  });

  describe('ngOnInit', () => {
    it('should intialize', () => {
      speakersComponent.ngOnInit();
      expect(dataService.getSpeakers).toHaveBeenCalled();
    });
  });
});
