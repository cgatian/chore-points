import { Component, OnInit } from '@angular/core';
import { ChoreService } from 'app/services/chore.service';

@Component({
  selector: 'cp-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminView implements OnInit {
  constructor(public choreService: ChoreService) { }

  ngOnInit() { }
}
