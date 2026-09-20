import { ICountry } from "./country-interface";
import { ITeam } from "./team-interface";
import { ISport } from "./sport-interface";

export interface ICountryResponse {
    countries: ICountry[];
}

export interface ITeamResponse {
    teams: ITeam[];
}

export interface ISportResponse {
    sports: ISport[];
}

export type { ICountry };
