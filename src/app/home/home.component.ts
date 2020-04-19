import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-home',
  animations: [
    trigger('showHide', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0.3,
      })),
      transition('* => hide', [
        animate('0.2s')
      ]),
      transition('* => show', [
        animate('0.4s')
      ]),
      transition('* => *', [
        animate('0.2s')
      ])
    ])
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showSpeakers = false;
  showSessions = false;

  speakersImage: string = 'assets/images/home/speakers.jpg';
  sessionsImage: string = 'assets/images/home/sessions.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  animateSpeakers(show: boolean) {
    this.showSpeakers = show;
  }

  animateSessions(show: boolean) {
    this.showSessions = show;
  }
}
