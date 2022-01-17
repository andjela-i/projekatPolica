using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    public class Autor
    {
        [Key]
        public int AutorID { get; set; }

        [MaxLength(30)]
        public string Ime { get; set; }

        [MaxLength(30)]
        public string Prezime { get; set; }

        [Range(1000,2000)]
        public int GodinaRodjenja { get; set; }

        [Range(1000,2022)]
        public int GodinaSmrti { get; set; }

        [JsonIgnore]
        virtual public List<Spoj> AutorKnjiga {get;set;}
    }

}