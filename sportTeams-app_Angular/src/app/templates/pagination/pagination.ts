import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {

  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 5;
  @Input() currentPage: number = 1;

  @Output() pageChange = new EventEmitter<number>();
  
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage); //koliko stranica imamo
  }

  pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1); //generisanje brojeva stranica
  }

  changePage(page: number) { 
    if(page >= 1 && page <= this.totalPages) {   //promjena stranice klikom na broj
      this.pageChange.emit(page);
    }
  }

  next() {
    this.changePage(this.currentPage + 1);
  }

  previous() {
    this.changePage(this.currentPage - 1);
  }
}
