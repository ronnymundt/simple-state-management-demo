import {Injectable} from '@angular/core';
import {ITimebox} from "../interfaces";
import {BehaviorSubject} from "rxjs";
import {ITimeBoxActions} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TimeboxStoreService {
  private _initialState = new  Array<ITimebox>();
  private _state = this._initialState;
  private _timeBoxes$ = new BehaviorSubject<Array<ITimebox>>(this._initialState);

  timeBoxes$ = this._timeBoxes$.asObservable();
  timeBoxActions: ITimeBoxActions = {
    init: ()=> {
      this._timeBoxes$.next(this._state);
    },
    add: (timeBox: ITimebox) => {
      this.add(timeBox);
    },
    update: (timeBox: ITimebox) => {
      this.update(timeBox)
    },
    remove: (timeBox: ITimebox) => {
      this.remove(timeBox);
    }
  }

  private add(timeBox: ITimebox): void {
    this._state = [...this._state, timeBox];
    this._timeBoxes$.next(this._state)
  }

  private remove(timeBox: ITimebox): void {
    this._state = this._state.filter(t => t.id !== timeBox.id);
    this._timeBoxes$.next(this._state);
  }

  private update(timeBox: ITimebox): void {
    this._state.map(x => {
      if (x.id === timeBox.id) {
        x.task = timeBox.task;
        x.duration = timeBox.duration;
      }
    });
    this._timeBoxes$.next(this._state);
  }
}
