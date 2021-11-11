import { useState } from "react";
import { useHistory } from "react-router-dom";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import TitlePage from "./../../components/TitlePage";

const clientes = [
  {
    id: 1,
    nome: "Microsoft",
    responsavel: "Otto",
    contato: "10665544",
    situacao: "Ativo",
  },
  {
    id: 2,
    nome: "Amazon",
    responsavel: "Willian",
    contato: "55448899",
    situacao: "Desativado",
  },
  {
    id: 3,
    nome: "Google",
    responsavel: "Jack",
    contato: "66554433",
    situacao: "Em Análise",
  },
  {
    id: 4,
    nome: "Facebook",
    responsavel: "Kevin",
    contato: "75881515",
    situacao: "Ativo",
  },
  {
    id: 5,
    nome: "Twitter",
    responsavel: "Jack",
    contato: "00256548",
    situacao: "Ativo",
  },
];

export default function ClienteLista() {
  const history = useHistory();
  const [termoBusca, setTermoBusca] = useState("");

  const handleInputChange = (e) => {
    setTermoBusca(e.target.value);
  };

  const clientesFiltrados = clientes.filter((cliente) => {
    return Object.values(cliente)
      .join(" ")
      .toLowerCase()
      .includes(termoBusca.toLowerCase());
  });

  const novoCliente = () => {
    history.push("/cliente/detalhe");
  };

  return (
    <>
      <TitlePage title="Cliente Lista">
        <Button variant="outline-secondary" onClick={novoCliente}>
          <i className="fas fa-plus me-2"></i>
          Novo Cliente
        </Button>
      </TitlePage>
      <InputGroup className="mb-3 mt-3">
        <InputGroup.Text>Buscar</InputGroup.Text>
        <FormControl
          onChange={handleInputChange}
          placeholder="buscar por nome"
        />
      </InputGroup>
      <table className="table table-striped table-hover">
        <thead className="table-dark mt-3">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Responsável</th>
            <th scope="col">Contato</th>
            <th scope="col">Situação</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados.map(
            ({ id, nome, responsavel, contato, situacao }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{nome}</td>
                <td>{responsavel}</td>
                <td>{contato}</td>
                <td>{situacao}</td>
                <td>
                  <div>
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => {
                        history.push(`/cliente/detalhe/${id}`);
                      }}
                    >
                      <i className="fas fa-user-edit me-2"></i>
                      Editar
                    </button>
                    <button className="btn btn-sm btn-outline-danger me-2">
                      <i className="fas fa-user-times me-2"></i>
                      Desativar
                    </button>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}
