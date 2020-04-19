import { Component, OnInit, Input } from '@angular/core';
import { Speaker } from 'src/app/shared/models/speaker.model';

@Component({
  selector: 'app-speaker-info',
  templateUrl: './speaker-info.component.html',
  styleUrls: ['./speaker-info.component.scss']
})
export class SpeakerInfoComponent implements OnInit {

  @Input() speaker: Speaker;

  constructor() { }

  ngOnInit(): void {
  }

}
