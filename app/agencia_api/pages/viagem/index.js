import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "@/styles/Home.module.css";

const Home = () => {
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://agencia-api.somee.com/api/Viagens")
      .then((response) => {
        setViagens(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de viagens:", error);
      });
  }, []);

  return (
    <div>
      <h1 className={style.h1}>Lista de Viagens</h1>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Valor da diária</th>
            <th>Data da ida</th>
            <th>Data da volta</th>
            <th>Cliente</th>
            <th>Destino</th>
          </tr>
        </thead>
        {viagens.map((elemento) => (
          <tbody key={elemento.id}>
            <tr className={style.tabela}>
              <td>{elemento.id}</td>
              <td>R$ {elemento.valorDiaria}</td>
              <td>{elemento.dataIda}</td>
              <td>{elemento.dataVolta}</td>
              <td>{elemento.cliente.nome}</td>
              <td>{elemento.destino.cidade}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Home;
