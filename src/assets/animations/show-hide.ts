import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

export const showHide = trigger('showHide', [
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
  ]);