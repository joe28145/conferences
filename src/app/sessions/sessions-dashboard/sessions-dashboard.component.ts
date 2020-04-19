import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Session } from 'src/app/shared/models/session.model';
import { Speaker, emptySpeaker } from 'src/app/shared/models/speaker.model';

@Component({
  selector: 'app-sessions-dashboard',
  templateUrl: './sessions-dashboard.component.html',
  styleUrls: ['./sessions-dashboard.component.scss']
})
export class SessionsDashboardComponent implements OnInit, OnChanges {

  @Input() sessions: Session[];
  @Input() speakers: Speaker[];

  filteredSessions: Session[];
  filterString: string;

  constructor() { }

  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    this.filteredSessions = this.sessions;
  }

  filterSessions() {
    this.filteredSessions = this.sessions
      .filter(session =>
        session.title.toLowerCase().includes(this.filterString.toLowerCase())
      );
  }

  clearFilter() {
    this.filterString = '';
    this.filterSessions();
  }

  findSpeaker(id: string): Speaker {
    if (this.speakers) {
      return this.speakers.find(speaker => speaker.id === id) || emptySpeaker;
    } else {
      return emptySpeaker;
    }
  }

}
