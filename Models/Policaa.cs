using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Policaa
    {
        [Key]
        public int ID { get; set; }

        [MaxLength(20)]
        public string Ime {get;set;}

        public List<Knjiga> Knjige {get;set;}

        
    }
}