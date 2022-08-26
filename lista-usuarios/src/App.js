import React from "react";

import About from "./components/About";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import ModalComponent from "./UI/Modal";
import Users from "./components/Users";
import { DefaultButton } from "./UI/Buttons";

function App() {
  //retorna a aplicação com cabeçalho, lista de usuários e rodapé
  //o conteúdo do cabeçalho são dois botões, um abre o modal sobre o projeto e o outro leva a fonte dos dados renderizados
  return (
    <div>
      <Header
        content={
          <>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/arthurhenriqueknorstcolling/testeSBSistemas"
            >
              <DefaultButton className={"btn btn-light btn-lg"}>GitHub</DefaultButton>
            </a>
            <ModalComponent
              className={"btn btn-light btn-lg"}
              title={"Especificações do Projeto"}
              buttonTittle={"About"}
            >
              <About />
            </ModalComponent>
          </>
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
