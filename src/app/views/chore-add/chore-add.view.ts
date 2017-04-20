import { Component, OnInit } from '@angular/core';
import {
  FormControl, FormGroup,
  FormBuilder, Validators
} from '@angular/forms';
import { ChoreService } from '../../services/chore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cp-chore-add-view',
  templateUrl: './chore-add.view.html',
  styleUrls: ['./chore-add.view.scss']
})
export class ChoreAddView implements OnInit {
  choreForm: FormGroup;

  constructor(
    private choreService: ChoreService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.choreForm = this.fb.group({
      title: ['', Validators.required ]
    });
   }

  onAddChore() {
    this.choreService.createChoreType({
      title: this.choreForm.value.title as string,
      pointValue: 0,
    });
    this.navigateBack();
  }
  onCancel() {
    this.navigateBack();
  }
  private navigateBack() {
    this.router.navigate(['/admin']);
  }

  ngOnInit() { }
}
