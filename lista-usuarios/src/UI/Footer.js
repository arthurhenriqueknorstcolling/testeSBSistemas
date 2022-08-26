import React from 'react';

function Footer(props) {
  //retorna o rodapé da página (Bootstrap)
  return (
    <div>
      <br />
      <div className="d-grid gap-3">
        <div className="p-1 bg-light ">
          <div className="text-center">
            <div className="fw-lighter fs-6 fst-italic">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
