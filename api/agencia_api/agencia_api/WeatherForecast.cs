namespace agencia_api
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

#pragma warning disable CS8632 // A anota��o para tipos de refer�ncia anul�veis deve ser usada apenas em c�digo em um contexto de anota��es '#nullable'.
        public string? Summary { get; set; }
#pragma warning restore CS8632 // A anota��o para tipos de refer�ncia anul�veis deve ser usada apenas em c�digo em um contexto de anota��es '#nullable'.
    }
}
