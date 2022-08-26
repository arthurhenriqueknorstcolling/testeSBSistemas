import React from "react";

import About from "./components/About";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import ModalComponent from "./UI/Modal";
import Users from "./components/Users";

function App() {
  //retorna a aplicação com cabeçalho, lista de usuários e rodapé
  return (
    <div>
      <Header
        content={
          <ModalComponent
            className={"btn btn-outline-dark btn-lg"}
            title={"Especificações do Projeto"}
            buttonTittle={"About"}
          >
            <About />
          </ModalComponent>
        }
      >
        Users List
      </Header>
      <Users />
      <Footer>by Arthur Henrique Knorst Colling</Footer>
    </div>
  );
}

export default App;
