using System.ComponentModel.DataAnnotations;

namespace agencia_api.Models
{
    public class Clientes
    {
        [Key]
        public int Id { get; set; }
        public string nome { get; set; }
        public string email { get; set; }
        public string senha { get; set; }
    }
}
