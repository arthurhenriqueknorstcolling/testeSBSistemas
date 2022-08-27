import React from "react";

import ModalComponent from "../UI/Modal";
import Table from "react-bootstrap/Table";

const UsersList = (props) => {
  const users = props.users;

  //retorna a lista de usuários em forma de tabela
  //retorna os detalhes de cada usuário quando clicar no botão details (modal)
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>E-mail</th>
          <th>City</th>
          <th className="text-center">Options</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(
          users.sort(function (a, b) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
          })
        ).map((id) => {
          return (
            <tr key={users[id].id}>
              <td>{users[id].name}</td>
              <td>{users[id].email}</td>
              <td>{users[id].address.city}</td>
              <td className="text-center">
                <ModalComponent
                  title={"Users Details"}
                  buttonTittle={"Details"}
                >
                  {
                    <ul type='none'>
                      <li >Id: {users[id].id}</li>
                      <li>Name: {users[id].name}</li>
                      <li>Username: {users[id].username}</li>
                      <li>E-mail: {users[id].email}</li>
                      <li>
                        Address:
                        {`${users[id].address.street}, 
                              ${users[id].address.suite} - ${users[id].address.city} - 
                              ${users[id].address.zipcode} - 
                              (${users[id].address.geo.lat}), 
                              (${users[id].address.geo.lng})`}
                      </li>
                      <li>Phone: {users[id].phone}</li>
                      <li>Website: {users[id].website}</li>
                      <li>Company Name: {users[id].company.name}</li>
                      <li>
                        Company Informations:
                        {`${users[id].company.catchPhrase} | 
                              ${users[id].company.bs}`}
                      </li>
                    </ul>
                  }
                </ModalComponent>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default UsersList;
