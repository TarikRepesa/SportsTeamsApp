export interface ICountry {
    id: number;
    name: string;
    code: string; 
}

export interface ICountriesResponse {
    countries: ICountry[];
}

export interface ICountryResponse {
    country: ICountry;
}