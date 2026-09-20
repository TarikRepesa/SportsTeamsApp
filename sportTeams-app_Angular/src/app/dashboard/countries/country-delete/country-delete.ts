import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SuccessModal } from '../../../templates/success-modal/success-modal';
import { CountryService } from '../../../services/country-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-country-delete',
  standalone: true,
  imports: [CommonModule, SuccessModal],
  templateUrl: './country-delete.html',
  styleUrl: './country-delete.scss',
})
export class CountryDelete {

  item: any;
  id!: number;

  showDelete = true;
  showSuccess = false;
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countryService: CountryService,
    private cdr: ChangeDetectorRef
  ) {}

    ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    let stateItem = nav?.extras?.state?.['item'];

    if (!stateItem && history.state?.item) {
      stateItem = history.state.item;
    }

    if (stateItem) {
      console.log("Item iz state:", stateItem);

      this.item = stateItem;
      this.id = stateItem.id;
      return;
    }

    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.id = +idParam;

      this.countryService.getCountryById(this.id).subscribe({
        next: (data) => {
          console.log("Item iz API:", data);
          this.item = data;
        },
        error: (err) => {
          console.error('Load failed:', err);
        }
      });
    }
  }

  close() {
    this.router.navigate(['/countries']);
  }

  confirmDelete() {
    this.countryService.deleteCountry(this.id).subscribe({
      next: () => {
        this.showDelete = false;
        this.showSuccess = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Delete failed:', err);
      }
    });
  }

  onSuccessClose() {
    this.router.navigate(['/countries']);
  }
}