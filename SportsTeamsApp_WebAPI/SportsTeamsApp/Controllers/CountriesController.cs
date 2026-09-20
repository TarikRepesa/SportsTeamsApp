using SportsTeamsApp.Database;
using SportsTeamsApp.DTOs;
using SportsTeamsApp.Models;

namespace SportsTeamsApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CountriesController : ControllerBase
    {
        private readonly AppDbContext _db;

        public CountriesController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<CountryDto>>> getAllCountries([FromQuery] int? id, [FromQuery] string? name)
        {
            var query = _db.Countries.AsQueryable();

            if (id.HasValue)
            {
                query = query.Where(c => c.Id.ToString().Contains(id.Value.ToString()));
            }

            if (!string.IsNullOrEmpty(name))
            {
                query = query.Where(c => c.Name.ToLower().Contains(name.ToLower()));
            }

            var result = await query
                .Select(c => new CountryDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Code = c.Code
                })
                .ToListAsync();

            return Ok(new
            {
                countries = result
            });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CountryDto>> getCountryById(int id)
        {
            var country = await _db.Countries.FindAsync(id);
            if (country == null)
                return NotFound();

            return Ok(new
            {
                country = new CountryDto
                {
                    Id = country.Id,
                    Name = country.Name,
                    Code = country.Code
                }
            });
        }

        [HttpPost]
        public async Task<ActionResult> createCountry(CountryCreateDto dto)
        {
            var country = new Country
            {
                Name = dto.Name,
                Code = dto.Code
            };

            _db.Countries.Add(country);
            await _db.SaveChangesAsync();

            return Ok(country);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> updateCountry(int id, CountryUpdateDto dto)
        {
            var country = await _db.Countries.FindAsync(id);
            if (country == null) 
                return NotFound();

            country.Name = dto.Name;
            country.Code = dto.Code;

            await _db.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteCountry(int id)
        {
            var country = await _db.Countries.FindAsync(id);
            if (country == null) 
                return NotFound();

            _db.Countries.Remove(country);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
