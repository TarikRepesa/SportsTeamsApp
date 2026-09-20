using Microsoft.EntityFrameworkCore;
using SportsTeamsApp.Models;

namespace SportsTeamsApp.Database
{
    public static class DbSeederData
    {
        public static void Seed(AppDbContext db)
        {
            db.Database.Migrate();

            if (!db.Sports.Any())
            {
                db.Sports.AddRange(new List<Sport>
                {
                    new Sport { Name = "Football" },
                    new Sport { Name = "Basketball" },
                    new Sport { Name = "Tennis" },
                    new Sport { Name = "Volleyball" },
                    new Sport { Name = "Handball" },
                    new Sport { Name = "Water Polo" },
                    new Sport { Name = "Ice Hockey" },
                    new Sport { Name = "Baseball" },
                    new Sport { Name = "Rugby" },
                    new Sport { Name = "American Football" },
                    new Sport { Name = "Cricket" },
                    new Sport { Name = "Golf" },
                    new Sport { Name = "Formula 1" },
                    new Sport { Name = "MotoGP" },
                    new Sport { Name = "Boxing" },
                    new Sport { Name = "MMA" },
                    new Sport { Name = "Table Tennis" },
                    new Sport { Name = "Badminton" },
                    new Sport { Name = "Swimming" },
                    new Sport { Name = "Athletics" },
                    new Sport { Name = "Cycling" },
                    new Sport { Name = "Skiing" },
                    new Sport { Name = "Snowboarding" },
                    new Sport { Name = "Judo" },
                    new Sport { Name = "Karate" },
                    new Sport { Name = "Taekwondo" },
                    new Sport { Name = "Fencing" },
                    new Sport { Name = "Archery" },
                    new Sport { Name = "Shooting" },
                    new Sport { Name = "Rowing" },
                    new Sport { Name = "Sailing" },
                    new Sport { Name = "Canoeing" },
                    new Sport { Name = "Equestrian" },
                    new Sport { Name = "Gymnastics" },
                    new Sport { Name = "Darts" },
                    new Sport { Name = "Snooker" },
                    new Sport { Name = "Bowling" },
                    new Sport { Name = "Surfing" },
                    new Sport { Name = "Skateboarding" },
                    new Sport { Name = "Climbing" },
                    new Sport { Name = "Billiards" },
                    new Sport { Name = "Chess" },
                    new Sport { Name = "Esports" },
                    new Sport { Name = "Padel" },
                    new Sport { Name = "Pickleball" },
                    new Sport { Name = "Lacrosse" },
                    new Sport { Name = "Field Hockey" },
                    new Sport { Name = "Softball" },
                    new Sport { Name = "Squash" },
                    new Sport { Name = "Beach Volleyball" }
                });

                db.SaveChanges();
            }

            if (!db.Countries.Any())
            {
                db.Countries.AddRange(new List<Country>
                {
                    new Country { Name = "Serbia", Code = "SRB" },
                    new Country { Name = "Croatia", Code = "CRO" },
                    new Country { Name = "Bosnia and Herzegovina", Code = "BIH" },
                    new Country { Name = "Montenegro", Code = "MNE" },
                    new Country { Name = "Slovenia", Code = "SLO" },
                    new Country { Name = "USA", Code = "USA" },
                    new Country { Name = "United Kingdom", Code = "GBR" },
                    new Country { Name = "Germany", Code = "GER" },
                    new Country { Name = "France", Code = "FRA" },
                    new Country { Name = "Italy", Code = "ITA" },
                    new Country { Name = "Spain", Code = "ESP" },
                    new Country { Name = "Portugal", Code = "POR" },
                    new Country { Name = "Brazil", Code = "BRA" },
                    new Country { Name = "Argentina", Code = "ARG" },
                    new Country { Name = "Australia", Code = "AUS" },
                    new Country { Name = "Canada", Code = "CAN" },
                    new Country { Name = "Japan", Code = "JPN" },
                    new Country { Name = "China", Code = "CHN" },
                    new Country { Name = "Russia", Code = "RUS" },
                    new Country { Name = "Netherlands", Code = "NED" },
                    new Country { Name = "Belgium", Code = "BEL" },
                    new Country { Name = "Switzerland", Code = "SUI" },
                    new Country { Name = "Austria", Code = "AUT" },
                    new Country { Name = "Greece", Code = "GRE" },
                    new Country { Name = "Turkey", Code = "TUR" },
                    new Country { Name = "Norway", Code = "NOR" },
                    new Country { Name = "Sweden", Code = "SWE" },
                    new Country { Name = "Denmark", Code = "DEN" },
                    new Country { Name = "Finland", Code = "FIN" },
                    new Country { Name = "Poland", Code = "POL" },
                    new Country { Name = "Czech Republic", Code = "CZE" },
                    new Country { Name = "Hungary", Code = "HUN" },
                    new Country { Name = "Romania", Code = "ROU" },
                    new Country { Name = "Bulgaria", Code = "BUL" },
                    new Country { Name = "Ukraine", Code = "UKR" },
                    new Country { Name = "Mexico", Code = "MEX" },
                    new Country { Name = "Colombia", Code = "COL" },
                    new Country { Name = "Chile", Code = "CHI" },
                    new Country { Name = "Uruguay", Code = "URU" },
                    new Country { Name = "South Africa", Code = "RSA" },
                    new Country { Name = "Egypt", Code = "EGY" },
                    new Country { Name = "Nigeria", Code = "NGR" },
                    new Country { Name = "Morocco", Code = "MAR" },
                    new Country { Name = "South Korea", Code = "KOR" },
                    new Country { Name = "India", Code = "IND" },
                    new Country { Name = "New Zealand", Code = "NZL" },
                    new Country { Name = "Ireland", Code = "IRL" },
                    new Country { Name = "Iceland", Code = "ISL" },
                    new Country { Name = "Palestine", Code = "PAL" },
                    new Country { Name = "Saudi Arabia", Code = "KSA" }
                });

                db.SaveChanges();
            }

            if (!db.Teams.Any())
            {
                db.Teams.AddRange(new List<Team>
                {
                    new Team { Name = "Red Star Belgrade", CountryId = 1, SportId = 1 },
                    new Team { Name = "Partizan Belgrade", CountryId = 1, SportId = 2 },
                    new Team { Name = "Real Madrid", CountryId = 11, SportId = 1 },
                    new Team { Name = "Barcelona", CountryId = 11, SportId = 1 },
                    new Team { Name = "LA Lakers", CountryId = 6, SportId = 2 },
                    new Team { Name = "Golden State Warriors", CountryId = 6, SportId = 2 },
                    new Team { Name = "Manchester City", CountryId = 7, SportId = 1 },
                    new Team { Name = "Liverpool", CountryId = 7, SportId = 1 },
                    new Team { Name = "Bayern Munich", CountryId = 8, SportId = 1 },
                    new Team { Name = "AC Milan", CountryId = 10, SportId = 1 },
                    new Team { Name = "Juventus", CountryId = 10, SportId = 1 },
                    new Team { Name = "PSG", CountryId = 9, SportId = 1 },
                    new Team { Name = "Dinamo Zagreb", CountryId = 2, SportId = 1 },
                    new Team { Name = "Hajduk Split", CountryId = 2, SportId = 1 },
                    new Team { Name = "KK Cedevita", CountryId = 5, SportId = 2 },
                    new Team { Name = "FK Sarajevo", CountryId = 3, SportId = 1 },
                    new Team { Name = "FK Budućnost", CountryId = 4, SportId = 1 },
                    new Team { Name = "NY Yankees", CountryId = 6, SportId = 8 },
                    new Team { Name = "Chicago Bulls", CountryId = 6, SportId = 2 },
                    new Team { Name = "Dallas Cowboys", CountryId = 6, SportId = 10 },
                    new Team { Name = "Maple Leafs", CountryId = 16, SportId = 7 },
                    new Team { Name = "Flamengo", CountryId = 13, SportId = 1 },
                    new Team { Name = "River Plate", CountryId = 14, SportId = 1 },
                    new Team { Name = "Ajax", CountryId = 20, SportId = 1 },
                    new Team { Name = "Porto", CountryId = 12, SportId = 1 },
                    new Team { Name = "Benfica", CountryId = 12, SportId = 1 },
                    new Team { Name = "Olympiacos", CountryId = 24, SportId = 2 },
                    new Team { Name = "Panathinaikos", CountryId = 24, SportId = 2 },
                    new Team { Name = "Fenerbahce", CountryId = 25, SportId = 1 },
                    new Team { Name = "Galatasaray", CountryId = 25, SportId = 1 },
                    new Team { Name = "Sydney Roosters", CountryId = 15, SportId = 9 },
                    new Team { Name = "All Blacks", CountryId = 46, SportId = 9 },
                    new Team { Name = "Maccabi Tel Aviv", CountryId = 49, SportId = 2 },
                    new Team { Name = "Celtic", CountryId = 7, SportId = 1 },
                    new Team { Name = "Rangers", CountryId = 7, SportId = 1 },
                    new Team { Name = "Zenit", CountryId = 19, SportId = 1 },
                    new Team { Name = "Boca Juniors", CountryId = 14, SportId = 1 },
                    new Team { Name = "Club America", CountryId = 36, SportId = 1 },
                    new Team { Name = "Kaizer Chiefs", CountryId = 40, SportId = 1 },
                    new Team { Name = "Al Hilal", CountryId = 50, SportId = 1 },
                    new Team { Name = "Al Nassr", CountryId = 50, SportId = 1 },
                    new Team { Name = "Mumbai Indians", CountryId = 45, SportId = 11 },
                    new Team { Name = "Vojvodina", CountryId = 1, SportId = 4 },
                    new Team { Name = "Zalgiris", CountryId = 30, SportId = 2 },
                    new Team { Name = "Lech Poznan", CountryId = 30, SportId = 1 },
                    new Team { Name = "Slavia Prague", CountryId = 31, SportId = 1 },
                    new Team { Name = "Steaua", CountryId = 33, SportId = 1 },
                    new Team { Name = "Ferencvaros", CountryId = 32, SportId = 1 },
                    new Team { Name = "RB Salzburg", CountryId = 23, SportId = 1 },
                    new Team { Name = "Basel", CountryId = 22, SportId = 1 }
                });

                db.SaveChanges();
            }
        }
    }
}