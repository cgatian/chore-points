import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ChoreService } from '../../services/chore.service';
import { ChoreType } from '../../models/chore-type.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cp-core-edit-view',
  template: `{{this.chore | async | json}}`
})
export class ChoreEditView implements OnInit {
  public chore: Observable<ChoreType>;

  constructor(
    private choreService: ChoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.chore = this.route.params
      .map((params: Params) => +params['id'])
      .switchMap(id => {
        return this.choreService.getChore(id);
      });
   }
}
