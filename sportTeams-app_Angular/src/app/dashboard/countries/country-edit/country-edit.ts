import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../../services/country-service';
import { SuccessModal } from '../../../templates/success-modal/success-modal';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-country-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SuccessModal],
  templateUrl: './country-edit.html',
  styleUrl: './country-edit.scss',
})
export class CountryEdit {

  item: any;
  id!: number;
  showSuccess = false;

  editForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    code: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

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

        this.editForm.patchValue({
          name: data.name,
          code: data.code
        });
      });
  }

  save() {
    if (this.editForm.invalid) return;

    this.countryService.updateCountry(this.id, this.editForm.getRawValue())
    .subscribe(() => {
      this.showSuccess = true;
      this.cdr.detectChanges();
    });
  }

  cancel() {
    this.router.navigate(['/countries']);
  }

  onSuccessClose() {
    this.router.navigate(['/countries']);
  }
}