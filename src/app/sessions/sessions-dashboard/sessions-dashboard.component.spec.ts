import { SessionsDashboardComponent } from './sessions-dashboard.component';
import * as SessionConstants from '../../../test-constants/session-constants';
import * as SpeakerConstants from '../../../test-constants/speaker-constants';
import { emptySpeaker } from '../../shared/models/speaker.model';

describe('SessionsDashboardComponent', () => {
  let sessionsDashboardComponent: SessionsDashboardComponent;

  beforeEach(() => {
    sessionsDashboardComponent = new SessionsDashboardComponent();
    sessionsDashboardComponent.sessions = SessionConstants.sessions;
    sessionsDashboardComponent.speakers = SpeakerConstants.speakers;

    sessionsDashboardComponent.ngOnInit();
  });

  describe('ngOnInit', () => {
    it('should initialize', () => {
      spyOn(sessionsDashboardComponent, 'ngOnChanges');

      sessionsDashboardComponent.ngOnInit();

      expect(sessionsDashboardComponent.ngOnChanges).toHaveBeenCalled();
    });
  });

  describe('ngOnChanges', () => {
    it('should respond to changes', () => {
      sessionsDashboardComponent.filteredSessions = [];
      sessionsDashboardComponent.ngOnChanges();

      expect(sessionsDashboardComponent.filteredSessions).toEqual(SessionConstants.sessions);
    });
  });

  describe('filterSessions', () => {
    it('should filter sessions', () => {
      sessionsDashboardComponent.filterString = 'javascript';
      sessionsDashboardComponent.filterSessions();

      expect(sessionsDashboardComponent.filteredSessions).toEqual([SessionConstants.sessions[1], SessionConstants.sessions[3]]);
    });
  });

  describe('clearFilter', () => {
    it('should clear the current filter', () => {
      spyOn(sessionsDashboardComponent, 'filterSessions');
      sessionsDashboardComponent.filterString = 'javascript';

      sessionsDashboardComponent.clearFilter();

      expect(sessionsDashboardComponent.filterString).toEqual('');
      expect(sessionsDashboardComponent.filterSessions).toHaveBeenCalled();
    });
  });

  describe('findSpeaker', () => {
    it('should find a speaker', () => {
      expect(sessionsDashboardComponent.findSpeaker(SpeakerConstants.speakers[0].id)).toEqual(SpeakerConstants.speakers[0]);
    });

    it('should return undefined if there is no speaker matching the id parameter', () => {
      expect(sessionsDashboardComponent.findSpeaker('not-an-id')).toEqual(emptySpeaker);
    });

    it('should return an empty speaker if the speakers array is empty', () => {
      sessionsDashboardComponent.speakers = [];

      expect(sessionsDashboardComponent.findSpeaker(SpeakerConstants.speakers[0].id)).toEqual(emptySpeaker);
    });
  });
});
