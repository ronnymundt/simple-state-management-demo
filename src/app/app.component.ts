import { Component } from '@angular/core';
import {TimeboxStoreService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: TimeboxStoreService) {
    // init. first task in timebox store
    this.store.timeBoxActions.add({
      task: 'New task',
      duration: '01:30',
      id: crypto.randomUUID()
    })
  }
}
