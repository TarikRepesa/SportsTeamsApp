import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITeam, ITeamsResponse, ITeamResponse } from '../interfaces/team-interface';
import { map, Observable } from 'rxjs';
import { API } from '../API';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {

  constructor(private http: HttpClient) {}

  getAllTeams(id?: number, name?: string, countryId?: number): Observable<ITeam[]> {
    let params: any = {};

    if (id !== undefined && id !== null) params.id = id;
    if (name) params.name = name;
    if (countryId !== undefined && countryId !== null) params.countryId = countryId;

    return this.http.get<ITeamsResponse>(`${API.url}${API.endpoints.teams.getAllTeams}`, { params })
      .pipe(map(res => res?.teams ?? []));
  }

  getTeamById(id: number): Observable<ITeam> {
    return this.http.get<ITeamResponse>(`${API.url}${API.endpoints.teams.getTeamById(id)}`)
      .pipe(map(res => res.team));
  }

  createTeam(team: ITeam): Observable<ITeam> {
    return this.http.post<ITeam>(`${API.url}${API.endpoints.teams.createTeam}`, team);
  }

  updateTeam(id: number, team: ITeam) {
    return this.http.put(`${API.url}${API.endpoints.teams.updateTeam(id)}`, team);
  }

  deleteTeam(id: number) {
    return this.http.delete<void>(`${API.url}${API.endpoints.teams.deleteTeam(id)}`);
  }
}