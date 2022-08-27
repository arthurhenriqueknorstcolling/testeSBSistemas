import React from "react";

import About from "./components/About";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import ModalComponent from "./UI/Modal";
import Users from "./components/Users";
import { DefaultButton } from "./UI/Buttons";

function App() {
  //retorna a aplicação com cabeçalho, lista de usuários e rodapé com informações do projeto
  //o conteúdo do cabeçalho são dois botões, um abre leva ao endpoint e o outro leva ao repositório
  return (
    <div>
      <Header
        content={
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jsonplaceholder.typicode.com/users"
            >
              <DefaultButton
                className={"btn btn-light btn-lg"}
                aria-current="page"
              >
                Endpoint
              </DefaultButton>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/arthurhenriqueknorstcolling/testeSBSistemas"
            >
              <DefaultButton className={"btn btn-light btn-lg"}>
                GitHub
              </DefaultButton>
            </a>
          </div>
        }
      >
        Users List
      </Header>
      <Users />
      <Footer>
        <ModalComponent
          className={"btn btn-link btn-sm fst-italic"}
          title={"Especificações do Projeto"}
          buttonTittle={"Project Informations"}
        >
          <About />
        </ModalComponent>
      </Footer>
    </div>
  );
}

export default App;
