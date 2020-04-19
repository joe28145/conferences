import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker } from '../shared/models/speaker.model';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.sass']
})
export class SpeakersComponent implements OnInit {

  $speakers: Observable<Speaker[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.$speakers = this.dataService.getSpeakers();
  }

}
