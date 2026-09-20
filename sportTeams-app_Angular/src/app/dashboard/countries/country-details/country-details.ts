import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../../services/country-service';
import { Tabs } from '../../../templates/tabs/tabs';
import { Teams } from '../../teams/teams';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [CommonModule, Tabs, Teams],
  templateUrl: './country-details.html',
  styleUrl: './country-details.scss',
})
export class CountryDetails {

  item: any;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryService,
    private cdr: ChangeDetectorRef  
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (!idParam) return;

    this.id = +idParam;

    this.countryService.getCountryById(this.id)
      .subscribe(data => {
        this.item = data;
        this.cdr.detectChanges(); 
      });
  }

  goBack() {
    this.router.navigate(['/countries']);
  }
}