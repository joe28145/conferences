import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { Observable } from 'rxjs';
import { Session } from '../shared/models/session.model';
import { Speaker } from '../shared/models/speaker.model';
import { Store, select } from '@ngrx/store';
import { LoadSessions } from '../store/session/actions/session.actions';
import { LoadSpeakers } from '../store/speaker/actions/speaker.actions';
import * as SpeakerSelectors from '../store/speaker/selectors/speaker.selectors';
import * as SessionSelectors from '../store/session/selectors/session.selectors';
import { Status } from '../shared/models/status.model';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.sass']
})
export class SessionsComponent implements OnInit {
  
  sessions$: Observable<Session[]>;
  sessionsStatus$: Observable<Status>;
  speakers$: Observable<Speaker[]>;
  speakersStatus$: Observable<Status>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadSessions());
    this.store.dispatch(new LoadSpeakers());
    this.sessions$ = this.store.pipe(select(SessionSelectors.getSessions));
    this.sessionsStatus$ = this.store.pipe(select(SessionSelectors.getSessionsStatus));
    this.speakers$ = this.store.pipe(select(SpeakerSelectors.getSpeakers));
    this.speakersStatus$ = this.store.pipe(select(SpeakerSelectors.getSpeakersStatus));
  }

}
