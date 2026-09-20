import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { ListView } from '../../templates/list-view/list-view';
import { CountryService } from '../../services/country-service';
import { ICountry } from '../../interfaces/country-interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, ListView, ReactiveFormsModule],
  templateUrl: './countries.html',
  styleUrls: ['./countries.scss']
})
export class Countries implements OnInit {

  countries: ICountry[] = [];
  selectedCountry: any = null;

  loading = false;

  filterForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null)
  });

  filter: { id?: number; name?: string } = {};

  constructor(
    private router: Router,
    private countryService: CountryService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.filterCountries();
    this.loadCountries();

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.urlAfterRedirects === '/countries') {
          this.loadCountries();
        }
      });
  }

  loadCountries() {
    this.loading = true; 
    this.countryService.getAllCountries(this.filter.id, this.filter.name).subscribe({
      next: (data) => {
        this.countries = [...data];
          setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
          }, 500);
      },
      error: (err) => console.error(err)
    });
  }

  filterCountries() {
    this.filterForm.valueChanges
      .pipe(debounceTime(500),
        distinctUntilChanged())
      .subscribe(values => {
        this.filter = {
          id: values.id ? +values.id : undefined,
          name: values.name || undefined
        };
        
        this.loadCountries();
      });
    }

  onCountryClick(country: any) {
    this.selectedCountry = country;
  }
}
