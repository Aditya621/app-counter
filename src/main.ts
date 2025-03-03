import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CounterAppComponent } from './app/counter-app/counter-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <!-- <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a> -->
    <app-counter-app></app-counter-app>
  `,
  imports: [CommonModule, CounterAppComponent]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
