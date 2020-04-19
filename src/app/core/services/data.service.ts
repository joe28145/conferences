import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Speaker } from 'src/app/shared/models/speaker.model';
import { Session } from 'src/app/shared/models/session.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  baseUrl = environment.baseUrl;
  speakerUrl: string = '/speakers'

  constructor(private http: HttpClient) { }

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>(`${environment.speakers.url}`);
  }

  getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(`${environment.sessions.url}`);
  }
}
