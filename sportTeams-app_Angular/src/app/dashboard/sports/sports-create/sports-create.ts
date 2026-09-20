import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SuccessModal } from '../../../templates/success-modal/success-modal';
import { SportsService } from '../../../services/sports-service';
import { ISport } from '../../../interfaces/sport-interface';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sports-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SuccessModal],
  templateUrl: './sports-create.html',
  styleUrl: './sports-create.scss',
})
export class SportsCreate {

  showSuccess = false;

  createForm = new FormGroup({
    name: new FormControl<string>('', Validators.required)
  });

  constructor(
    private router: Router,
    private sportsService: SportsService,
    private cdr: ChangeDetectorRef
  ) {}

  save() {
    if (this.createForm.invalid) return;

    const sport: ISport = {
      id: 0,
      name: this.createForm.value.name!
    };

    this.sportsService.createSport(sport).subscribe({
      next: () => {
        this.showSuccess = true;
        this.cdr.detectChanges();
      }
      });
  }

  onSuccessClose() {
    this.router.navigate(['/sports']);
  }

  cancel() {
    this.router.navigate(['/sports']);
  }
}