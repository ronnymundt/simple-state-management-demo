import { Component } from '@angular/core';
import {TimeboxStoreService} from "./services/timebox.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: TimeboxStoreService) {
    this.store.timeBoxActions.add({
      task: 'Neue Aufgabe',
      duration: '01:00',
      id: crypto.randomUUID()
    })
  }
}
