import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListView } from '../../templates/list-view/list-view';
import { SportsService } from '../../services/sports-service';
import { ISport } from '../../interfaces/sport-interface';
import { Router, NavigationEnd } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule, ListView, ReactiveFormsModule],
  templateUrl: './sports.html',
  styleUrl: './sports.scss',
})
export class Sports implements OnInit {

  sports: ISport[] = [];
  selectedSport: ISport | null = null;

  loading = false;

  filterForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null)
  });

  filter: { id?: number; name?: string } = {};

  constructor(
    private sportsService: SportsService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.filterSports();
    this.loadSports();

     this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.urlAfterRedirects === '/sports') {
          this.loadSports();
        }
      });

  }

  loadSports() {
    this.loading = true;
    this.sportsService.getAllSports(this.filter.id, this.filter.name).subscribe({
      next: (data) => {
        this.sports = [...data];
        setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
          }, 500);
      },
      error: (err) => console.error(err)
    });
  }

  filterSports() {
      this.filterForm.valueChanges
        .pipe(debounceTime(500),
          distinctUntilChanged())
        .subscribe(values => {
          this.filter = {
            id: values.id ? +values.id : undefined,
            name: values.name || undefined
          };
  
          this.loadSports();
        });
  }

  onSportClick(sport: ISport) {
    this.selectedSport = sport;
  }
}