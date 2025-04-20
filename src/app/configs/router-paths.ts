import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { OverviewComponent } from '../components/overview/overview.component';

export const routerPaths: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'overview', component: OverviewComponent },
  { path: '**', redirectTo: 'home' },
];
