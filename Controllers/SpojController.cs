using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Models;
using Microsoft.EntityFrameworkCore;

namespace Polica.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SpojController : ControllerBase
    {

        public PoliceContext Context{get;set;}
        public SpojController(PoliceContext context){
            Context=context;
        }

        [Route("PreuzmiAutorKnjiga/{idKnjige}")]
        [HttpGet]
        public ActionResult  PreuzmiAutorKnjiga(int idKnjige)
        {
            /* var spojevi=Context.Knjige
            .Include(p=>p.KnjigaAutor)
            .ThenInclude(p=>p.Autor);
            
            var spoj=await spojevi.Where(p=>p.ID==idKnjige).ToListAsync();
            return Ok(spoj); */
             
             var spojevi =Context.AutoriKnjige.
                Include(p=>p.Knjiga)
                .Include(p=>p.Autor)
                .Where(p=>p.Knjiga.ID==idKnjige).ToList();
             return Ok(
                     spojevi.Select(p=>
                     new
                     {
                         ImeKnjige=p.Knjiga.Naziv,
                         Zanr=p.Knjiga.Zanr,
                         GodinaIzdanja=p.GodinaIzdanja,
                         ImeAutora=p.Autor.Ime,
                         PrezimeAutora=p.Autor.Prezime,
                         GodinaRodjenja=p.Autor.GodinaRodjenja,
                         GodinaSmrti=p.Autor.GodinaSmrti
                     })
                 );
        }
    }
}