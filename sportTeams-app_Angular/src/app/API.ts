export const API = {
  url: 'http://localhost:5150',
  endpoints: {
    countries: {
      getAllCountries: '/api/countries',
      getCountryById: (id: number) => `/api/countries/${id}`,
      createCountry: '/api/countries',
      updateCountry: (id: number) => `/api/countries/${id}`,
      deleteCountry: (id: number) => `/api/countries/${id}`
    },
    teams: {
      getAllTeams: '/api/teams',
      getTeamById: (id: number) => `/api/teams/${id}`,
      createTeam: '/api/teams',
      updateTeam: (id: number) => `/api/teams/${id}`,
      deleteTeam: (id: number) => `/api/teams/${id}`
    },
    sports: {
      getAllSports: '/api/sports',
      getSportById: (id: number) => `/api/sports/${id}`,
      createSport: '/api/sports',
      updateSport: (id: number) => `/api/sports/${id}`,
      deleteSport: (id: number) => `/api/sports/${id}`
    }
  }
};