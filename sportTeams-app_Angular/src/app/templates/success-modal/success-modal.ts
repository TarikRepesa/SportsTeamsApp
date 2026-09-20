import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success-modal.html',
  styleUrl: './success-modal.scss',
})
export class SuccessModal {

  @Input() title: string = 'Success';
  @Input() message: string = '';

  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
