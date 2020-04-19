import { Component, OnInit, Input } from '@angular/core';
import { Session } from 'src/app/shared/models/session.model';
import { Speaker } from 'src/app/shared/models/speaker.model';

@Component({
  selector: 'app-session-info',
  templateUrl: './session-info.component.html',
  styleUrls: ['./session-info.component.scss']
})
export class SessionInfoComponent implements OnInit {

  @Input() session: Session;
  @Input() speaker: Speaker;

  constructor() { }

  ngOnInit(): void {
  }

}
