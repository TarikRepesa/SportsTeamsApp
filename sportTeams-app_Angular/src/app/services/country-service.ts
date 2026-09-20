import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountry, ICountriesResponse, ICountryResponse } from '../interfaces/country-interface';
import { map, Observable } from 'rxjs';
import { API } from '../API';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  constructor(private http: HttpClient) {}

  getAllCountries(id?: number, name?: string): Observable<ICountry[]> {
    let params: any = {};

    if (id) params.id = id;
    if (name) params.name = name;

    return this.http.get<ICountriesResponse>(`${API.url}${API.endpoints.countries.getAllCountries}`, { params })
      .pipe(map(res => res?.countries ?? []));
  }

  getCountryById(id: number): Observable<ICountry> {
    return this.http.get<ICountryResponse>(`${API.url}${API.endpoints.countries.getCountryById(id)}`)
      .pipe(map(res => res.country));
  }

  createCountry(country: { name: string; code: string }) {
    return this.http.post(`${API.url}${API.endpoints.countries.createCountry}`, country);
  }

  updateCountry(id: number, country: { name: string; code: string }) {
    return this.http.put(`${API.url}${API.endpoints.countries.updateCountry(id)}`, country);
  }

  deleteCountry(id: number) {
    return this.http.delete(`${API.url}${API.endpoints.countries.deleteCountry(id)}`);
  }
}