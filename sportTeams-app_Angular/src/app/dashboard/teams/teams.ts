import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListView } from '../../templates/list-view/list-view';
import { TeamsService } from '../../services/teams-service';
import { ITeam } from '../../interfaces/team-interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, ListView, ReactiveFormsModule],
  templateUrl: './teams.html',
  styleUrl: './teams.scss',
})
export class Teams implements OnInit {

  @Input() showCreateButton: boolean = true;

  private _countryId: number | undefined;

  @Input() set country(value: any) {
    if (value) {
      this._countryId = value.id;
      this.loadTeams();
    }
  }

  teams: ITeam[] = [];
  selectedTeam: ITeam | null = null;

  loading = false;

  filterForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null)
  });

  filter: { id?: number; name?: string } = {};
  
  constructor(
    private teamsService: TeamsService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.filterTeams();
    if (!this._countryId) {
      this.loadTeams();
    }

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.urlAfterRedirects === '/teams') {
          this.loadTeams();
        }
      });
  }

  loadTeams() {
    this.loading = true;
    this.teamsService.getAllTeams(this.filter.id, this.filter.name, this._countryId).subscribe({
      next: (data) => {
        this.teams = [...data];
        setTimeout(() => {
          this.loading = false;
          this.cdr.detectChanges();
        }, 500);
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  filterTeams() {
    this.filterForm.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(values => {
        this.filter = {
          id: values.id ? +values.id : undefined,
          name: values.name || undefined
        };
        this.loadTeams();
      });
  }

  onTeamClick(team: ITeam) {
    this.selectedTeam = team;
  }
}