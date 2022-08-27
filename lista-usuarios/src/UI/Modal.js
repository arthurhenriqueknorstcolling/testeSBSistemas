import React, { useState } from "react";

import { CloseXButton, DefaultButton } from "./Buttons";
import Modal from "react-modal";

//utilizando a biblioteca react-modal e seguindo a documentação da mesma para criação do modal
Modal.setAppElement("#root");

const ModalComponent = (props) => {
  //useState para saber o estado atual do modal: aberto(true); fechado(false)
  const [modalOpen, setModalOpen] = useState(false);

  //função para abrir o modal
  const modalOpenerHandler = () => {
    setModalOpen(true);
  };

  //função para fechar o modal
  const modalCloseHandler = () => {
    setModalOpen(false);
  };

  //retorna o botão que abre o modal na tela, com conteúdo passado por props children e títulos do botão e do modal passados por props
  return (
    <div className="container-fluid">
      <DefaultButton onClick={modalOpenerHandler} className={props.className}>
        {props.buttonTittle}
      </DefaultButton>

      <Modal isOpen={modalOpen} onRequestClose={modalCloseHandler}>
        <CloseXButton onClick={modalCloseHandler} />
        <div className="d-grid gap-2">
          <div className="fs-2 text-center">{props.title}</div>
          <div className="fs-5 text-start">{props.children}</div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
