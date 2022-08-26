import React, { useState, useEffect } from "react";

import LoadingSpinner from "../UI/LoadingSpinner";
import UsersList from "./UsersList";

const Users = () => {
  //useState para mudança dos dados de usuários
  const [users, setUsers] = useState([]);

  //useState para aparecer o spinner de carregamento enquanto acessa os dados
  const [loading, setLoading] = useState(false);

  //useEffect para rodar o código de acesso ao recarregar a página
  useEffect(() => {
    fetchData();
  }, []);

  //código para acessar os dados no endpoint e informar caso ocorra algum erro
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .then(setLoading(true))
      .catch((error) => {
        console.log(error);
      });
  };

  //retorna a lista de usuários em forma de tabela ou o spinner de carregamento
  return (
    <div className="container-fluid">
      {loading ? <UsersList users={users} /> : <LoadingSpinner />}
    </div>
  );
};

export default Users;
