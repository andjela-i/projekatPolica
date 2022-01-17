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
    public class PolicaController : ControllerBase
    {

        public PoliceContext Context{get;set;}
        public PolicaController(PoliceContext context){
            Context=context;
        }

        [Route("DodajPolicu/{ime}")]
        [HttpPost]
        public async Task<ActionResult> dodajPolicu(string ime)
        {
            var polica=new Policaa();
            polica.Ime=ime;
            try
            {
                Context.Police.Add(polica);
                await Context.SaveChangesAsync();
                return Ok(polica.ID);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("IzbrisiPolicu/{id}")]
        [HttpDelete]
        public async Task<ActionResult> Izbrisi(int id)
        {
            if(id<=0)
            {
                return BadRequest("Pogresan ID!");
            }
            try
            {
                var polica = await Context.Police.FindAsync(id);
                Context.Police.Remove(polica);
                await Context.SaveChangesAsync();

                return Ok("uspesno izbrisana polica");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiSve")]
        [HttpGet]

        public ActionResult PreuzmiSve()
        {
            return Ok(Context.Police);
        }

        [Route("PromeniPolicu/{id}/{ime}")]
        [HttpPut]
        public  ActionResult PromeniPolicu(int id,string ime)
        {
            
                var policaZaPromenu= Context.Police.Find(id);
                policaZaPromenu.Ime=ime;

                 Context.SaveChanges();
                return Ok("polica uspesno izmenjena");
            
        }
    }
}