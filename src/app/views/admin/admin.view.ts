import { Component, OnInit } from '@angular/core';
import { ChoreService } from 'app/services/chore.service';

@Component({
  selector: 'cp-admin-view',
  templateUrl: './admin.view.html',
  styleUrls: ['./admin.view.scss']
})
export class AdminView implements OnInit {
  constructor(public choreService: ChoreService) { }

  ngOnInit() { }
}
