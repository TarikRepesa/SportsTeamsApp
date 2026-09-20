export interface ISport {
    id: number;
    name: string;
}

export interface ISportsResponse {
    sports: ISport[];
}

export interface ISportResponse {
    sport: ISport;
}
