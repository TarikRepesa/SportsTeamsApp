import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SuccessModal } from '../../../templates/success-modal/success-modal';
import { TeamsService } from '../../../services/teams-service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-teams-delete',
  standalone: true,
  imports: [CommonModule, SuccessModal],
  templateUrl: './teams-delete.html',
  styleUrl: './teams-delete.scss',
})
export class TeamsDelete {

  item: any;
  showDelete = true;
  showSuccess = false;

  constructor(
    private router: Router,
    private teamsService: TeamsService,
    private cdr: ChangeDetectorRef
  ) {
    const state = history.state;
    this.item = state?.item;
  }

  confirmDelete() {
    if (!this.item?.id) return;

    this.teamsService.deleteTeam(this.item.id).subscribe({
      next: () => {
        this.showDelete = false;
        this.showSuccess = true;
        this.cdr.detectChanges();
      }
    });
  }

  onSuccessClose() {
    this.router.navigate(['/teams'], { replaceUrl: true });
  }

  close() {
    this.router.navigate(['/teams']);
  }
}