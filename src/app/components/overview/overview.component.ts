import { Component } from '@angular/core';
import {TimeboxStoreService} from "../../services/timebox.service";

@Component({
  selector: 'bit-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  timeBoxes$ = this.store.timeBoxes$;

  constructor(private store: TimeboxStoreService) {
  }
}
