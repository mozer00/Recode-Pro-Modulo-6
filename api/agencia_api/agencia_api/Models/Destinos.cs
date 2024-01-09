using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace agencia_api.Models
{
    public class Destinos
    {
        [Key]
        public int Id { get; set; }
        public double ValorPassagem { get; set; }
        public string Cidade {  get; set; }
        public string Pais { get; set; }
        [JsonIgnore]
        public List<Viagens> Viagens { get; set; }
    }
}
