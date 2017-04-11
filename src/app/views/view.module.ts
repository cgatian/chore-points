import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { ViewRoutingModule } from './view-routing.module';
import { HomeView } from './home/home-view.component';
import { AdminView } from './admin/admin-view.component';
import { ChoreEditView } from './chore-edit/chore-edit-view.component';
import { ChoreAddView } from './chore-add/chore-add-view.component';

@NgModule({
  declarations: [
    AdminView,
    HomeView,
    ChoreEditView,
    ChoreAddView
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
