import React from "react";

function About() {
  //retorna o texto sobre as especificações do projeto
  return (
    <div>
      <p>
        Biblioteca:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/"
        >
          ReactJS
        </a>
      </p>
      <p>
        Endpoint:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://jsonplaceholder.typicode.com/"
        >
          JSON Placeholder
        </a>
      </p>
      <p>
        Estilização:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://getbootstrap.com/"
        >
          Bootstrap
        </a>
      </p>
      <p> Desenvolvedor: Arthur Henrique Knorst Colling; </p>
      <p> Data de entrega: 26/08/2022; </p>
      <p>
        Repositório:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/arthurhenriqueknorstcolling/testeSBSistemas"
        >
          GitHub
        </a>
      </p>
      <p> Solicitações para o desenvolvimento:</p>
      <p>
        Faça um projeto em React contendo uma lista de usuários. Para a criação
        dessa lista você deverá buscar os dados em um endpoint de testes criado
        pelo site jsonplaceholder que é o seguinte:
        https://jsonplaceholder.typicode.com/users. Os requisitos mínimos que
        você deverá implementar são:
      </p>
      <p>
        - Listar os resultados em ordem alfabética (Mostrando nome, email e
        cidade/uf);
      </p>
      <p> - Estilização ao seu critério;</p>
      <p>
        - Implementar um modal que contenha as informações mais detalhadas do
        usuário;
      </p>
      <p>
        - Subir o projeto no Github de forma pública e após finalizar o projeto
        compartilhá-lo conosco.
      </p>
      <p>
        Você pode implementar algumas funcionalidades a mais (que não são
        obrigatórias) porém podem agregar no seu projeto. Sendo estas:
      </p>
      <p> - UI Responsiva;</p>
      <p> - Utilizando o React com o Typescript;</p>
      <p> - Componentização.</p>
      <p>
        Além disso, sinta-se à vontade para implementar mais coisas caso queira
        e também utilizar de bibliotecas de componentes e funcionalidades para
        facilitar a implementação. Boa sorte!
      </p>
    </div>
  );
}

export default About;
