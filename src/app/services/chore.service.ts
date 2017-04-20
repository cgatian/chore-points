import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ChoreType } from 'app/models/chore-type.model';
import { choreTypes } from './mocks/chore.service.mock';

@Injectable()
export class ChoreService {
  private count = 2;
  private _choreTypes: BehaviorSubject<ChoreType[]>;

  public get choreTypes(): Observable<ChoreType[]> {
    return this._choreTypes.asObservable();
  }

  constructor() {
    this._choreTypes = new BehaviorSubject(choreTypes);
  }

  createChoreType(chore: ChoreType): void {
    chore.id = ++this.count;
    this._choreTypes.next([... this._choreTypes.getValue(), chore]);
  }
  getChore(choreId: number): Observable<ChoreType> {
    return Observable.of(this._choreTypes.getValue().find(c => c.id === choreId));
  }
}
