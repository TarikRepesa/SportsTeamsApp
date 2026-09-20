import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs {

  @Input() tab1Template: any;
  @Input() tab2Template: any;

  @Input() country: any;
  
  activeTab: string = 'teams';
}

