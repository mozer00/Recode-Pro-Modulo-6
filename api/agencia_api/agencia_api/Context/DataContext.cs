using agencia_api.Models;
using Microsoft.EntityFrameworkCore;

namespace agencia_api.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Destinos> Destinos { get; set; }
        public DbSet<Viagens> Viagens { get; set; }  
    }
}
