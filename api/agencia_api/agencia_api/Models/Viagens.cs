using System.Text.Json.Serialization;

namespace agencia_api.Models
{
    public class Viagens
    {
        public int Id { get; set; }
        public double ValorDiaria { get; set; }
        public string DataIda { get; set; }
        public string DataVolta { get; set; }

        public int ClienteId { get; set; }
    
        public Clientes Cliente { get; set; }

        public int DestinoId { get; set; }
     

        public Destinos Destino { get; set; } 
    }
}
