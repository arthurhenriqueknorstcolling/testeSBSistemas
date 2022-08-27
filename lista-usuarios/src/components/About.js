import React from "react";

function About() {
  //retorna o texto sobre as especificações do projeto
  return (
    <ul type='none'>
      <li>
        Biblioteca:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/"
        >
          ReactJS
        </a>
      </li>
      <li>
        Endpoint:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://jsonplaceholder.typicode.com/"
        >
          JSON Placeholder
        </a>
      </li>
      <li>
        Estilização:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://getbootstrap.com/"
        >
          Bootstrap
        </a>
      </li>
      <li> Desenvolvedor: Arthur Henrique Knorst Colling; </li>
      <li> Data de entrega: 26/08/2022; </li>
      <li>
        Repositório:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/arthurhenriqueknorstcolling/testeSBSistemas"
        >
          GitHub
        </a>
      </li>
      <li> Solicitações para o desenvolvimento:</li>
      <li>
        Faça um projeto em React contendo uma lista de usuários. Para a criação
        dessa lista você deverá buscar os dados em um endpoint de testes criado
        pelo site jsonplaceholder que é o seguinte:
        https://jsonplaceholder.typicode.com/users. Os requisitos mínimos que
        você deverá implementar são:
      </li>
      <li>
        - Listar os resultados em ordem alfabética (Mostrando nome, email e
        cidade/uf);
      </li>
      <li> - Estilização ao seu critério;</li>
      <li>
        - Implementar um modal que contenha as informações mais detalhadas do
        usuário;
      </li>
      <li>
        - Subir o projeto no Github de forma pública e após finalizar o projeto
        compartilhá-lo conosco.
      </li>
      <li>
        Você pode implementar algumas funcionalidades a mais (que não são
        obrigatórias) porém podem agregar no seu projeto. Sendo estas:
      </li>
      <li> - UI Responsiva;</li>
      <li> - Utilizando o React com o Typescript;</li>
      <li> - Componentização.</li>
      <li>
        Além disso, sinta-se à vontade para implementar mais coisas caso queira
        e também utilizar de bibliotecas de componentes e funcionalidades para
        facilitar a implementação. Boa sorte!
      </li>
    </ul>
  );
}

export default About;
