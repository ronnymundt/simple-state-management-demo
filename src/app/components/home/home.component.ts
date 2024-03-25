import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {TimeboxStoreService} from "../../services";

@Component({
  selector: 'bit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  timeBoxes$ = this.store.timeBoxes$;

  constructor(
    private store: TimeboxStoreService,
    private readonly fb: FormBuilder
  ) { }

  /**
   * Event Methode fügt neue TimeBox zum State hinzu.
   */
  onAddClick() {
    this.store.timeBoxActions.add({
        task: null,
        duration: '01:00',
        id: crypto.randomUUID()
    });
  }
}
