import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SuccessModal } from '../../../templates/success-modal/success-modal';
import { SportsService } from '../../../services/sports-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sports-delete',
  standalone: true,
  imports: [CommonModule, SuccessModal],
  templateUrl: './sports-delete.html',
  styleUrl: './sports-delete.scss',
})
export class SportsDelete {

  item: any;
  showDelete = true;
  showSuccess = false;

  constructor(
    private router: Router,
    private sportsService: SportsService,
    private cdr: ChangeDetectorRef
  ) {
    this.item = history.state?.item;
  }

  confirmDelete() {
    if (!this.item) return;

    this.sportsService.deleteSport(this.item.id).subscribe({
      next: () => {
        this.showDelete = false;
        this.showSuccess = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Delete error:', err);
      }
    });
  }

  onSuccessClose() {
    this.router.navigate(['/sports'], { replaceUrl: true });
  }

  close() {
    this.router.navigate(['/sports']);
  }
}