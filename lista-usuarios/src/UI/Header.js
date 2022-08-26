import React from 'react';

function Header(props) {
  //retorna o cabeçalho da página com o título e um ícone (Bootstrap) no canto esquerdo
  // No canto direito recebe um conteúdo via props, nesse caso, informações sobre o projeto
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-brand fs-2 p-1">
            <img
              src="../../../logo192.png"
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
            {` ${props.children}`}
          </div>

          <div className="navbar-nav justify-content-end p-1">
            {props.content}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
