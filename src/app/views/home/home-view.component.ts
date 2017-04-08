import { Component, OnInit } from '@angular/core';
import { ChoreService } from '../../services/chore.service';

@Component({
  selector: 'cp-home-view',
  templateUrl: './home-view.component.html'
})
export class HomeView {

  constructor(public choreService: ChoreService) { }

  addChore(choreDescription: string) {
    this.choreService.addChore({
      description: choreDescription
    });
  }
}
