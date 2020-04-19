import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

const homeRoutes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(homeRoutes),
    CommonModule
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
