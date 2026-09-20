import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sports-details.html',
  styleUrl: './sports-details.scss',
})
export class SportsDetails {

  item: any;

  detailsForm = new FormGroup({
    name: new FormControl<string>('')
  });

  constructor(private router: Router) {}

  ngOnInit() {
    this.item = history.state?.item;

    if (this.item) {
      this.detailsForm.patchValue(this.item);
      this.detailsForm.disable();
    }
  }

  goBack() {
    this.router.navigate(['/sports']);
  }
}