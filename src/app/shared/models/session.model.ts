import { Time } from '@angular/common';

export class Session {
    id: string;
    title: string;
    speakerId: string;
    description: string;
    day: Date;
    startTime: Time;
    endTime: Time;
}