using SportsTeamsApp.Database;
using SportsTeamsApp.DTOs;
using SportsTeamsApp.Models;

namespace SportsTeamsApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeamsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public TeamsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<TeamDto>>> getAllTeams(
            [FromQuery] int? id,
            [FromQuery] string? name,
            [FromQuery] int? countryId)
        {
            var query = _db.Teams.AsQueryable();

            if (id.HasValue)
                query = query.Where(c => c.Id.ToString().Contains(id.Value.ToString()));

            if (!string.IsNullOrEmpty(name))
                query = query.Where(c => c.Name.ToLower().Contains(name.ToLower()));

            if (countryId.HasValue)
                query = query.Where(c => c.CountryId == countryId.Value);

            var result = await query
                .Select(c => new TeamDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    CountryId = c.CountryId,
                    SportId = c.SportId
                })
                .ToListAsync();

            return Ok(new { teams = result });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TeamDto>> getTeamById(int id)
        {
            var team = await _db.Teams.FindAsync(id);
            if (team == null)
                return NotFound();

            return Ok(new
            {
                team = new TeamDto
                {
                    Id = team.Id,
                    Name = team.Name,
                    CountryId = team.CountryId,
                    SportId = team.SportId
                }
            });
        }

        [HttpPost]
        public async Task<ActionResult> createTeam(TeamCreateDto dto)
        {
            var team = new Team
            {
                Name = dto.Name,
                CountryId = dto.CountryId,
                SportId = dto.SportId
            };

            _db.Teams.Add(team);
            await _db.SaveChangesAsync();

            return Ok(team);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> updateTeam(int id, TeamUpdateDto dto)
        {
            var team = await _db.Teams.FindAsync(id);
            if (team == null)
                return NotFound();

            team.Name = dto.Name;
            team.CountryId = dto.CountryId;
            team.SportId = dto.SportId;

            await _db.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteTeam(int id)
        {
            var team = await _db.Teams.FindAsync(id);
            if (team == null)
                return NotFound();

            _db.Teams.Remove(team);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
