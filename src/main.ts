import {provideRouter} from "@angular/router";
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import {routerPaths} from "./app/configs";

bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routerPaths),
      provideAnimations()
    ]
}).catch(err => console.error(err));
