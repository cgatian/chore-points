import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cp-core-edit-view',
  template: `chore edit: {{this.id}}`
})
export class ChoreEditView implements OnInit {
  public id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params
        .map((params: Params) => params['id'])
        .subscribe(id => this.id = id);
   }
}
