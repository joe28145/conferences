import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsComponent } from './sessions.component';
import { RouterModule } from '@angular/router';
import { SessionsDashboardComponent } from './sessions-dashboard/sessions-dashboard.component';
import { SessionInfoComponent } from './sessions-dashboard/session-info/session-info.component';
import { FormsModule }   from '@angular/forms';

const sessionsRoutes = [
  { path: '', component: SessionsComponent }
]

@NgModule({
  declarations: [SessionsComponent, SessionsDashboardComponent, SessionInfoComponent],
  imports: [
    RouterModule.forChild(sessionsRoutes),
    CommonModule,
    FormsModule
  ]
})
export class SessionsModule { }
