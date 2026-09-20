import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard";
import { Countries } from "./dashboard/countries/countries";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, Countries],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('sportTeams-app');
}
