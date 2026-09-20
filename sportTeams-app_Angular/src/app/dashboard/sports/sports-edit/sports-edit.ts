import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SportsService } from '../../../services/sports-service';
import { SuccessModal } from '../../../templates/success-modal/success-modal';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sports-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SuccessModal],
  templateUrl: './sports-edit.html',
  styleUrl: './sports-edit.scss',
})
export class SportsEdit {

  item: any;
  showSuccess = false;

  editForm = new FormGroup({
    name: new FormControl<string>('', Validators.required)
  });

  constructor(
    private router: Router,
    private sportsService: SportsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.item = history.state?.item;

    if (!this.item) {
      this.router.navigate(['/sports']);
      return;
    }

    this.editForm.patchValue({
      name: this.item.name
    });
  }

  save() {
    if (this.editForm.invalid) return;

    const payload = {
      name: this.editForm.value.name!
    };

    this.sportsService.updateSport(this.item.id, payload).subscribe({
      next: () => {
        this.showSuccess = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('UPDATE ERROR:', err);
        alert('Update nije uspio');
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