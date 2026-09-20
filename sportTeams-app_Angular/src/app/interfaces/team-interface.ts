export interface ITeam {
    id: number;
    name: string;
    countryId: number;
    sportId: number;
}

export interface ITeamsResponse {
    teams: ITeam[];
}

export interface ITeamResponse {
    team: ITeam;
}