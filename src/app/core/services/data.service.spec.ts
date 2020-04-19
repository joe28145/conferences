import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import * as SpeakerConstants from 'src/test-constants/speaker-constants';
import * as SessionConstants from 'src/test-constants/session-constants';

describe('DataService', () => {
  let httpTestingController: HttpTestingController;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    dataService = TestBed.inject(DataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('Speakers', () => {
    it('should successfully get a list of speakers', () => {
      dataService.getSpeakers().subscribe(
        (speakers) => {
          expect(speakers).toEqual(SpeakerConstants.speakers);
        }
      );
      const req: TestRequest = httpTestingController.expectOne(request => request.url.includes('/speakers'));
      expect(req.request.method).toEqual('GET');
      req.flush(SpeakerConstants.speakers);
    });

    it('should fail to get a list of speakers', () => {
      dataService.getSpeakers().subscribe(
        () => {
          fail('this should have been an error');
        },
        (err) => {
          expect(err.message).toContain('500 failure');
        }
      );

      const req: TestRequest = httpTestingController.expectOne(request => request.url.includes('/speakers'));
      expect(req.request.method).toEqual('GET');
      req.flush('error', { status: 500, statusText: 'failure' });
    });
  });

  describe('Sessions', () => {
    it('should get a list of sessions', () => {
      dataService.getSessions().subscribe(
        (sessions) => {
          expect(sessions).toEqual(SessionConstants.sessions);
        }
      );
      const req: TestRequest = httpTestingController.expectOne(request => request.url.includes('/sessions'));
      expect(req.request.method).toEqual('GET');
      req.flush(SessionConstants.sessions);
    });

    it('should fail to get a list of speakers', () => {
      dataService.getSessions().subscribe(
        () => {
          fail('this should have been an error');
        },
        (err) => {
          expect(err.message).toContain('500 failure');
        }
      );

      const req: TestRequest = httpTestingController.expectOne(request => request.url.includes('/sessions'));
      expect(req.request.method).toEqual('GET');
      req.flush('error', { status: 500, statusText: 'failure' });
    });
  });
});
