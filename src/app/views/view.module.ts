import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { ViewRoutingModule } from './view-routing.module';
import { HomeView } from './home/home-view.component';

@NgModule({
  declarations: [
    HomeView
  ],
  imports: [
    SharedModule,
    ViewRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class ViewModule {}
