import {Component} from '@angular/core';
import {TimeboxStoreService} from "../../services";
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { TimeboxComponent } from '../timebox/timebox.component';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'bit-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
      NgFor,
      TimeboxComponent,
      MatButton,
      RouterLink,
      AsyncPipe
    ]
})
export class HomeComponent {
  timeBoxes$ = this.store.timeBoxes$;

  constructor(private store: TimeboxStoreService) {
    // init. first task in timebox store
    this.store.timeBoxActions.add({
      task: 'New task',
      duration: '01:30',
      id: crypto.randomUUID()
    });
  }

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
