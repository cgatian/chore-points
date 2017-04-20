import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { ViewRoutingModule } from './view-routing.module';
import { HomeView } from './home/home.view';
import { AdminView } from './admin/admin.view';
import { ChoreEditView } from './chore-edit/chore-edit.view';
import { ChoreAddView } from './chore-add/chore-add.view';
import { ChoreFormComponent } from './_components/chore-form/chore-form.component';

@NgModule({
  declarations: [
    AdminView,
    HomeView,
    ChoreEditView,
    ChoreAddView,
    ChoreFormComponent
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
