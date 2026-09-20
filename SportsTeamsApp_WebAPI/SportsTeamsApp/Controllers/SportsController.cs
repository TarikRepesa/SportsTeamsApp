using SportsTeamsApp.Database;
using SportsTeamsApp.DTOs;
using SportsTeamsApp.Models;

namespace SportsTeamsApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SportsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public SportsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<SportDto>>> getAllSports([FromQuery] int? id, [FromQuery] string? name)
        {
            var query = _db.Sports.AsQueryable();

            if (id.HasValue)
            {
                query = query.Where(c => c.Id.ToString().Contains(id.Value.ToString()));
            }

            if (!string.IsNullOrEmpty(name))
            {
                query = query.Where(c => c.Name.ToLower().Contains(name.ToLower()));
            }

            var result = await query
                .Select(c => new SportDto
                {
                    Id = c.Id,
                    Name = c.Name
                })
                .ToListAsync();

            return Ok(new
            {
                sports = result
            });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SportDto>> getSportById(int id)
        {
            var sport = await _db.Sports.FindAsync(id);
            if (sport == null)
                return NotFound();

            return Ok(new
            {
                sport = new SportDto
                {
                    Id = sport.Id,
                    Name = sport.Name
                }
            });
        }

        [HttpPost]
        public async Task<IActionResult> createSport(SportCreateDto dto)
        {
            var sport = new Sport
            {
                Name = dto.Name
            };

            _db.Sports.Add(sport);
            await _db.SaveChangesAsync();

            return Ok(sport);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> updateSport(int id, SportUpdateDto dto)
        {
            var sport = await _db.Sports.FindAsync(id);
            if (sport == null) 
                return NotFound();

            sport.Name = dto.Name;

            await _db.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteSport(int id)
        {
            var sport = await _db.Sports.FindAsync(id);
            if (sport == null)
                return NotFound();

            _db.Sports.Remove(sport);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
