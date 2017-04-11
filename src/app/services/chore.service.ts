import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ChoreType } from 'app/models/chore-type.model';
import { choreTypes } from './mocks/chore.service.mock';

@Injectable()
export class ChoreService {
  private _choreTypes: BehaviorSubject<ChoreType[]>;

  public get choreTypes(): Observable<ChoreType[]> {
    return this._choreTypes.asObservable();
  }

  constructor() {
    this._choreTypes = new BehaviorSubject(choreTypes);
  }

  createChoreType(chore: ChoreType): void {
    this._choreTypes.next([... this._choreTypes.getValue(), chore]);
  }
}
