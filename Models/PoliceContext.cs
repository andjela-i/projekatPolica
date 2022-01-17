using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class PoliceContext : DbContext
    {
        public DbSet<Autor> Autori {get;set;}

        public DbSet<Knjiga> Knjige {get;set;}

        public DbSet<Policaa> Police{get;set;}

        public DbSet<Spoj> AutoriKnjige{get;set;}

        public PoliceContext(DbContextOptions options) : base(options)
        {
            
        }


    }
}