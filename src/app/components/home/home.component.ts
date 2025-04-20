import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimeboxStoreService} from "../../services";
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { TimeboxComponent } from '../timebox/timebox.component';

@Component({
    selector: 'bit-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      TimeboxComponent,
      MatButton,
      RouterLink,
    ]
})
export class HomeComponent {
  private store = inject(TimeboxStoreService)
  timeBoxes$ = this.store.timeBoxes$;

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
