using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class Spoj
    {
        [Key]
        public int ID { get; set; }

        [Range(1000,2000)]
        public int GodinaIzdanja {get; set;}

        virtual public Autor Autor { get; set; }
        virtual public Knjiga Knjiga { get; set; }


    }
}