import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CountryService } from '../../../services/country-service';
import { SuccessModal } from '../../../templates/success-modal/success-modal';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-country-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SuccessModal],
  templateUrl: './country-create.html',
  styleUrl: './country-create.scss',
})
export class CountryCreate {

  showSuccess = false;

  createForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    code: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  constructor( 
    private router: Router, 
    private countryService: CountryService,
    private cdr: ChangeDetectorRef
  ) {}

  save() {
  if (this.createForm.invalid) return;

  this.countryService.createCountry(this.createForm.getRawValue())
    .subscribe({
      next: () => {
        this.showSuccess = true; 
        this.cdr.detectChanges();
      }
    });
  }

  cancel() {
    this.router.navigate(['/countries']);
  }

  onSuccessClose() {
     this.router.navigate(['/countries']);
  }
}