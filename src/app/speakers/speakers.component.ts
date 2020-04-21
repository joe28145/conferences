import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker } from '../shared/models/speaker.model';
import { Store, select } from '@ngrx/store';
import { LoadSpeakers } from '../store/speaker/actions/speaker.actions';
import * as SpeakerSelectors from '../store/speaker/selectors/speaker.selectors';
import { Status } from '../shared/models/status.model';


@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.sass']
})
export class SpeakersComponent implements OnInit {

  speakers$: Observable<Speaker[]>;
  speakersStatus$: Observable<Status>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadSpeakers());

    this.speakers$ = this.store.pipe(select(SpeakerSelectors.getSpeakers));
    this.speakersStatus$ = this.store.pipe(select(SpeakerSelectors.getSpeakersStatus));
  }

}
