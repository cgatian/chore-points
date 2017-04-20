import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminView } from './admin/admin.view';
import { HomeView } from './home/home.view';
import { ChoreEditView } from './chore-edit/chore-edit.view';
import { ChoreAddView } from './chore-add/chore-add.view';

const routes: Routes = [
  { path: 'home', component: HomeView },
  { path: 'admin', component: AdminView },
  { path: 'chore', component: ChoreAddView },
  { path: 'chore/:id', component: ChoreEditView }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class ViewRoutingModule { }
