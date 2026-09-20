import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SuccessModal } from '../../../templates/success-modal/success-modal';
import { TeamsService } from '../../../services/teams-service';
import { ITeam } from '../../../interfaces/team-interface';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-teams-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SuccessModal],
  templateUrl: './teams-create.html',
  styleUrl: './teams-create.scss',
})
export class TeamsCreate {

  list: any[] = [];
  showSuccess = false;
  private isSaving = false;

  public createForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    countryId: new FormControl<number | null>(null),
    sportId: new FormControl<number | null>(null)
  });

  constructor(
    private router: Router,
    private teamsService: TeamsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const state = history.state;
    this.list = state?.list || [];
  }

    save() {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }

    const value = this.createForm.getRawValue();

    if (!value.countryId || !value.sportId) {
      alert("CountryId i SportId moraju postojati!");
      return;
    }

    const newTeam: ITeam = {
      id: 0, 
      name: value.name!,
      countryId: value.countryId!,
      sportId: value.sportId!
    };

    this.teamsService.createTeam(newTeam).subscribe({
      next: (res) => {
        this.showSuccess = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Greška pri spremanju:", err);
        alert("Nešto nije u redu s API-jem");
      }
    });
  }

  onSuccessClose() {
    this.router.navigate(['/teams'], {
      state: { updatedList: this.list }
    });
  }

  cancel() {
    this.router.navigate(['/teams']);
  }
}