using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Models;

namespace Polica.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KnjigaController : ControllerBase
    {

        public PoliceContext Context{get;set;}
        public KnjigaController(PoliceContext context){
            Context=context;
        }

        [Route("Preuzmi/{zanr}")]
        [HttpGet]

        public ActionResult Preuzmi(string zanr)
        {
            var knjige = Context.Knjige.Where(k=>k.Zanr==zanr).ToList();

            return Ok(knjige);
        }
        
        [Route("PreuzmiSve")]
        [HttpGet]

        public ActionResult PreuzmiSve()
        {
            return Ok(Context.Knjige);
        }

        [Route("PreuzmiNaziv/{naziv}")]
        [HttpGet]

        public ActionResult PreuzmiNaziv(string naziv)
        {
            var knjiga = Context.Knjige.Where(k=>k.Naziv==naziv).FirstOrDefault();
            if(knjiga!=null)
            {
                 return Ok(knjiga);
            }
            else return BadRequest("Knjiga ne postoji u bazi podataka");
        }
    }
}
