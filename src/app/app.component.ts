import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeboxStoreService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  private store = inject(TimeboxStoreService);

  ngOnInit() {
    // init. first task in timebox store
    this.store.timeBoxActions.add({
      task: 'New task',
      duration: '01:30',
      id: crypto.randomUUID(),
    });
  }
}
