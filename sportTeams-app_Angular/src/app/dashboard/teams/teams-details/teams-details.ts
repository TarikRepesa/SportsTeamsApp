import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './teams-details.html',
  styleUrl: './teams-details.scss',
})
export class TeamsDetails {

  item: any;

  public detailsForm = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string>('', Validators.required),
    countryId: new FormControl<number | null>(null),
    sportId: new FormControl<number | null>(null)
  });

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const state = history.state;
    this.item = state?.item;

    if (this.item) {
      this.detailsForm.patchValue({
        id: this.item.id,
        name: this.item.name,
        countryId: this.item.countryId,
        sportId: this.item.sportId
      });

      this.detailsForm.disable();
    } else {
      const id = this.route.snapshot.paramMap.get('id');
      console.log('Reload detected, ID:', id);
    }
  }

  goBack() {
    this.router.navigate(['/teams']);
  }
}