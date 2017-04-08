import { Injectable } from '@angular/core';
import { Chore } from 'app/models/chore.model';

import { choresMock } from './mocks/chore.service.mock';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChoreService {
  private _chores: BehaviorSubject<Chore[]>;

  public get chores(): Observable<Chore[]> {
    return this._chores.asObservable();
  }

  constructor() {
    this._chores = new BehaviorSubject(choresMock);
  }

  addChore(chore: Chore): void {
    this._chores.next([... this._chores.getValue(), chore]);
  }
}
