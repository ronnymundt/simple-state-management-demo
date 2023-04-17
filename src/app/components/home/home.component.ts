import {Component} from '@angular/core';
import {TimeboxStoreService} from "../../services/timebox.service";

@Component({
  selector: 'bit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  timeBoxes$ = this.store.timeBoxes$;

  constructor(
    private store: TimeboxStoreService
  ) { }

  /**
   * Event Methode fügt neue TimeBox zum State hinzu.
   */
  onAddClick() {
    this.store.timeBoxActions.add({
        task: 'Neue Aufgabe',
        duration: '01:00',
        id: crypto.randomUUID()
    });
  }
}
