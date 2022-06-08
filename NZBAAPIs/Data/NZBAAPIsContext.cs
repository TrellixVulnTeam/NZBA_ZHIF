#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NZBAAPIs.Model;

namespace NZBAAPIs.Data
{
    public class NZBAAPIsContext : DbContext
    {
        public NZBAAPIsContext (DbContextOptions<NZBAAPIsContext> options)
            : base(options)
        {
        }

        public DbSet<NZBAAPIs.Model.Organisation> Organisation { get; set; }
        public DbSet<NZBAAPIs.Model.Item> Item { get; set; }
    }
}
