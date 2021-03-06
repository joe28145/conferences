import { Component, OnInit, Input } from '@angular/core';
import { Speaker } from 'src/app/shared/models/speaker.model';
import { Status } from 'src/app/shared/models/status.model';

@Component({
  selector: 'app-speakers-dashboard',
  templateUrl: './speakers-dashboard.component.html',
  styleUrls: ['./speakers-dashboard.component.scss']
})
export class SpeakersDashboardComponent implements OnInit {

  @Input() speakers: Speaker[];
  @Input() speakersStatus: Status;

  constructor() { }

  ngOnInit(): void {
  }

}
