import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { Observable } from 'rxjs';
import { Session } from '../shared/models/session.model';
import { Speaker } from '../shared/models/speaker.model';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.sass']
})
export class SessionsComponent implements OnInit {
  
  $sessions: Observable<Session[]>;
  $speakers: Observable<Speaker[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.$sessions = this.dataService.getSessions();
    this.$speakers = this.dataService.getSpeakers();
  }

}
