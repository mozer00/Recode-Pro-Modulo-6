import { useEffect, useState } from "react";
import axios from "axios";
import style from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Home = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7181/Categorias")
      .then((response) => {
        setClients(responde.data);
      })
      .catch((error) => {
        console.error("Erro", error);
      });
  }, []);

  return (
    <div>
      <h1 className={style.h1}>Lista de Categorias</h1>
      <p>
        <Link
          href="categoria/add-categoria"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Inserir Categoria
        </Link>
      </p>
      <table className="table container tabela">
        <thead>
          <tr>
            <th>CategoriaId</th>3<th>Nome</th>
            <th>ImagemUrk</th>
            <th>Ações</th>
            {""}
            {}
          </tr>
        </thead>
        {clients.map((element) => (
          <tbody key={element.id}>
            <tr className="{style.tabela}">
              <td>{element.categoriaId}</td>
              <td>{element.nome}</td>
              <td>{element.imagemUrl}</td>
              <td>
                <Link
                  href={`categria/update-categoria/${element.categoriaId}`}
                  className="btn btn-warning"
                >
                  Editar
                </Link>
                <Link
                  href={`categria/delete-categoria/${element.categoriaId}`}
                  className="btn btn-danger"
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
export default AddClient;
