import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "../styles/Home.module.css";
import Link from "next/link"; // Importe o Link para criar links de navegação

const Home = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("https://localhost:7291/api/Clientes")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de clientes:", error);
      });
  }, []);

  return (
    <div>
      <h1 className={style.h1}>Lista de Clientes</h1>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
          </tr>
        </thead>
        {clients.map((elemento) => (
          <tbody key={elemento.id}>
            <tr className={style.tabela}>
              <td>{elemento.id}</td>
              <td>{elemento.nome}</td>
              <td>{elemento.email}</td>
              <td>{elemento.senha}</td>
              <td>
                <Link
                  href={`/update-client/${elemento.id}`}
                  className="btn btn-warning"
                >
                  Editar
                </Link>
                <Link
                  href={`/delete-client/${elemento.id}`}
                  className="btn btn btn-danger"
                >
                  Excluir
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Home;
