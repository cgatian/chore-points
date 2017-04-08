import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeView } from './home/home-view.component';

const routes: Routes = [
  { path: 'home', component: HomeView }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class ViewRoutingModule { }
