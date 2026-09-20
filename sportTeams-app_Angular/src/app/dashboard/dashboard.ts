import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Countries } from './countries/countries';
import { Teams } from './teams/teams';
import { Sports } from './sports/sports';
import { RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Countries, Teams, Sports, RouterModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],

  animations: [
    trigger('routeAnim', [

      transition('list => create', [
        query(':enter, :leave', [
          style({ position: 'absolute', top: 0, left: 0, width: '100%' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('1s ease', style({ transform: 'translateX(-100%)' }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('1s ease', style({ transform: 'translateX(0%)' }))
          ], { optional: true })
        ])
      ]),

      transition('create => list', [
        query(':enter, :leave', [
          style({ position: 'absolute', top: 0, left: 0, width: '100%' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('1s ease', style({ transform: 'translateX(100%)' }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('1s ease', style({ transform: 'translateX(0%)' }))
          ], { optional: true })
        ])
      ]),

      transition('list => details', [
        query(':enter, :leave', [
          style({ position: 'absolute', top: 0, left: 0, width: '100%' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('1s ease', style({ transform: 'translateX(-100%)' }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('1s ease', style({ transform: 'translateX(0%)' }))
          ], { optional: true })
        ])
      ]),

      transition('details => list', [
        query(':enter, :leave', [
          style({ position: 'absolute', top: 0, left: 0, width: '100%' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('1s ease', style({ transform: 'translateX(100%)' }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('1s ease', style({ transform: 'translateX(0%)' }))
          ], { optional: true })
        ])
      ]),

      transition('list => edit', [
        query(':enter, :leave', [
          style({ position: 'absolute', top: 0, left: 0, width: '100%' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('1s ease', style({ transform: 'translateX(-100%)' }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('1s ease', style({ transform: 'translateX(0%)' }))
          ], { optional: true })
        ])
      ]),

      transition('edit => list', [
        query(':enter, :leave', [
          style({ position: 'absolute', top: 0, left: 0, width: '100%' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('1s ease', style({ transform: 'translateX(100%)' }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('1s ease', style({ transform: 'translateX(0%)' }))
          ], { optional: true })
        ])
      ]),
    ])
  ]
})

export class DashboardComponent implements AfterViewInit { 
  
  menuOpen = false;
  
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

