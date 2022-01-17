using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Knjiga")]
    public class Knjiga
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(30)]
        public string Naziv { get; set; }

        [Required]
        [MaxLength(10)]
        public string Zanr { get; set; }

        [JsonIgnore]
        [Required]
        virtual public List<Spoj> KnjigaAutor { get; set; }
    }
}