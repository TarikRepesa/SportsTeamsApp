using Microsoft.EntityFrameworkCore;
using SportsTeamsApp.Models;

namespace SportsTeamsApp.Database
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Country> Countries { get; set; }
        public DbSet<Sport> Sports { get; set; }
        public DbSet<Team> Teams { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Team>()
                .HasOne(t => t.Country)
                .WithMany(c => c.Teams)
                .HasForeignKey(t => t.CountryId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Team>()
                .HasOne(t => t.Sport)
                .WithMany(s => s.Teams)
                .HasForeignKey(t => t.SportId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}