import React from 'react';

const CloseXButton = (props) => {
  //retorna o botão de fechar (X) no canto direito superior da tela (Bootstrap)
  return (
    <div className="position-relative">
      <button
        type="button"
        className="btn btn-secondary position-absolute top-0 end-0"
        variant="secondary"
        onClick={props.onClick}
      >
        X
      </button>
    </div>
  );
};

const DefaultButton = (props) => {
  //retorna um botão padrão (Bootstrap), com o erro de ficar selecionado corrigido, recorrente do botão do Bootstrap
  return (
    <button
      type="button"
      className={props.className ? props.className : "btn btn-secondary"}
      onClick={props.onClick}
      onMouseDown={(event) => event.preventDefault()}
    >
      {props.children}
    </button>
  );
};

export { CloseXButton, DefaultButton };
