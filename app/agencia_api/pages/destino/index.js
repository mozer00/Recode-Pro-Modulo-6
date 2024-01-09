import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "@/styles/Home.module.css";

const Home = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://agencia-api.somee.com/api/Destinos")
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de destinos:", error);
      });
  }, []);

  return (
    <div>
      <h1 className={style.h1}>Lista de Destinos</h1>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Valor da Passagem</th>
            <th>Cidade de destino</th>
            <th>País do destino</th>
          </tr>
        </thead>
        {destinos.map((elemento) => (
          <tbody key={elemento.id}>
            <tr className={style.tabela}>
              <td>{elemento.id}</td>
              <td>R$ {elemento.valorPassagem}</td>
              <td>{elemento.cidade}</td>
              <td>{elemento.pais}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Home;
