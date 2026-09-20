import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Pagination } from "../pagination/pagination";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CommonModule, Pagination, FormsModule],
  templateUrl: './list-view.html',
  styleUrls: ['./list-view.scss'],
})
export class ListView {
  @Input() type: string = "";
  @Input() showCreateButton: boolean = true;
  @Output() rowClicked = new EventEmitter<any>();
  @Output() onFilterEvent = new EventEmitter();

  constructor(private router: Router, private cdr: ChangeDetectorRef) { }

  private _inputNiz: any[] = [];
  
  @Input() set inputNiz(value: any[]) {
    console.log('--- LISTVIEW PRIMIO PODATKE: ', value?.length);

    this._inputNiz = value || [];
    this.currentPage = 1;
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }

  get inputNiz(): any[] {
    return this._inputNiz;
  }

  selectedRow: any = null;
  currentPage = 1;
  itemsPerPage = 5;
  pageSizes: number[] = [3, 5, 10];

  get paginatedData(): any[] {
    if (!this.inputNiz || this.inputNiz.length === 0) return [];

    if(window.innerWidth <= 600) {
      return this.inputNiz;
    }

    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.inputNiz.slice(start, start + this.itemsPerPage);
  }

  onItemsPerPageChange() {
    this.currentPage = 1;
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.selectedRow = null;
  }

  onRowClick(item: any) {
    this.selectedRow = (this.selectedRow === item) ? null : item;
    this.rowClicked.emit(this.selectedRow);
  }

  goToDetails() {
    if (this.selectedRow && this.type) {
      this.router.navigate([`/${this.type}/details`, this.selectedRow.id], { state: { item: this.selectedRow } });
    }
  }

  goToEdit() {
    if (this.selectedRow && this.type) {
      this.router.navigate([`/${this.type}/edit`, this.selectedRow.id], { state: { item: this.selectedRow, list: this.inputNiz } });
    }
  }

  goToDelete() {
    if (this.selectedRow && this.type) {
      this.router.navigate(['/delete', this.type, this.selectedRow.id], { state: { item: this.selectedRow, list: this.inputNiz } });
    }
  }

  goToCreate() {
    if (this.type) {
      this.router.navigate([`/${this.type}/create`], { state: { list: this.inputNiz } });
    }
  }
}