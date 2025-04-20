import { Component } from '@angular/core';
import { TimeboxStoreService } from '../../services';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'bit-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  standalone: true,
  imports: [MatButton, RouterLink, AsyncPipe],
})
export class OverviewComponent {
  timeBoxes$ = this.store.timeBoxes$;

  constructor(private store: TimeboxStoreService) {}
}
