import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { API } from '../API';
import { ISport, ISportResponse, ISportsResponse } from '../interfaces/sport-interface';

@Injectable({
  providedIn: 'root',
})
export class SportsService {

  constructor(private http: HttpClient) {}

  getAllSports(id?: number, name?: string): Observable<ISport[]> {
    let params: any = {};

    if (id) params.id = id;
    if (name) params.name = name;

    return this.http.get<ISportsResponse>(`${API.url}${API.endpoints.sports.getAllSports}`, { params })
      .pipe(map(res => res?.sports ?? []));
  }

  getSportById(id: number): Observable<ISport> {
    return this.http.get<ISportResponse>(`${API.url}${API.endpoints.sports.getSportById(id)}`)
      .pipe(map(res => res.sport));
  }

  createSport(sport: ISport): Observable<ISport> {
    return this.http.post<ISport>(`${API.url}${API.endpoints.sports.createSport}`, sport);
  }

  updateSport(id: number, sport: { name: string }) {
    return this.http.put(`${API.url}${API.endpoints.sports.updateSport(id)}`, sport);
  }

  deleteSport(id: number) {
    return this.http.delete(`${API.url}${API.endpoints.sports.deleteSport(id)}`);
  }
}