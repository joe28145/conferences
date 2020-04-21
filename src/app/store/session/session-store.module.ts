import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromSession from './reducers/session.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SessionEffects } from './effects/session.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSession.sessionFeatureKey, fromSession.reducer),
    EffectsModule.forFeature([SessionEffects])
  ]
})
export class SessionStoreModule { }
