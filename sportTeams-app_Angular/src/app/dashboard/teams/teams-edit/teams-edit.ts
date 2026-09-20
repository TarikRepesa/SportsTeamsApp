import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SuccessModal } from '../../../templates/success-modal/success-modal';
import { TeamsService } from '../../../services/teams-service';
import { ITeam } from '../../../interfaces/team-interface';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-teams-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SuccessModal],
  templateUrl: './teams-edit.html',
  styleUrl: './teams-edit.scss',
})
export class TeamsEdit {

  item: any;
  showSuccess = false;

  public editForm = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string>('', Validators.required),
    countryId: new FormControl<number | null>(null),
    sportId: new FormControl<number | null>(null)
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teamsService: TeamsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const state = history.state;
    this.item = state?.item;

    if (this.item) {
      this.editForm.patchValue(this.item);
    } else {
      const id = this.route.snapshot.paramMap.get('id');

      if (id) {
        this.teamsService.getTeamById(+id).subscribe((res: ITeam) => {
          this.item = res;
          this.editForm.patchValue(res);
        });
      }
    }
  }

  save() {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }

    const value = this.editForm.getRawValue();

    if (!value.id || !value.countryId || !value.sportId) {
      alert("Missing required fields");
      return;
    }

    const updatedTeam: ITeam = {
      id: value.id,
      name: value.name!,
      countryId: value.countryId!,
      sportId: value.sportId!
    };

    this.teamsService.updateTeam(value.id, updatedTeam).subscribe({
      next: () => {
        this.showSuccess = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        alert("Update failed");
      }
    });
  }

  onSuccessClose() {
    this.router.navigate(['/teams']);
  }

  cancel() {
    this.router.navigate(['/teams']);
  }
}