import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { Countries } from './dashboard/countries/countries';
import { Teams } from './dashboard/teams/teams';
import { Sports } from './dashboard/sports/sports';
import { CountryDelete } from './dashboard/countries/country-delete/country-delete';
import { TeamsDelete } from './dashboard/teams/teams-delete/teams-delete';
import { SportsDelete } from './dashboard/sports/sports-delete/sports-delete';
import { CountryDetails } from './dashboard/countries/country-details/country-details';
import { TeamsDetails } from './dashboard/teams/teams-details/teams-details';
import { SportsDetails } from './dashboard/sports/sports-details/sports-details';
import { CountryEdit } from './dashboard/countries/country-edit/country-edit';
import { TeamsEdit } from './dashboard/teams/teams-edit/teams-edit';
import { SportsEdit } from './dashboard/sports/sports-edit/sports-edit';
import { CountryCreate } from './dashboard/countries/country-create/country-create';
import { TeamsCreate } from './dashboard/teams/teams-create/teams-create';
import { SportsCreate } from './dashboard/sports/sports-create/sports-create';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'countries', pathMatch: 'full' },

      { path: 'delete/countries/:id', component: CountryDelete },
      { path: 'delete/teams/:id', component: TeamsDelete },
      { path: 'delete/sports/:id', component: SportsDelete },

      {
        path: 'countries',
        children: [
          { path: '', component: Countries, data: {anim: 'list'} },
          { path: 'create', component: CountryCreate, data: { anim: 'create' } },
          { path: 'details/:id', component: CountryDetails, data: {anim: 'details'} },
          { path: 'edit/:id', component: CountryEdit, data: {anim: 'edit'} }
        ]
      },

      {
        path: 'teams',
        children: [
          { path: '', component: Teams, data: {anim: 'list'} },
          { path: 'create', component: TeamsCreate, data: { anim: 'create' } },
          { path: 'details/:id', component: TeamsDetails, data: {anim: 'details'} },
          { path: 'edit/:id', component: TeamsEdit, data: {anim: 'edit'} }
        ]
      },

      {
        path: 'sports',
        children: [
          { path: '', component: Sports, data: {anim: 'list'} },
          { path: 'create', component: SportsCreate, data: { anim: 'create' } },
          { path: 'details/:id', component: SportsDetails, data: {anim: 'details'} },
          { path: 'edit/:id', component: SportsEdit, data: {anim: 'edit'} }
        ]
      },
    ],
  },
];
