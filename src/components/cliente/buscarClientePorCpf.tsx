import React, { useState, ChangeEvent } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface ClienteEncontrado {
  nome: string;
  nomeSocial: string;
  telefone: string;
  email: string;
}

const BuscarClientePorCPF: React.FC<Props> = ({ show, onHide }) => {
  const [step, setStep] = useState(1);
  const [cpfBusca, setCpfBusca] = useState("");
  const [clienteEncontrado, setClienteEncontrado] = useState<ClienteEncontrado | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCpfBusca(e.target.value);
  };

  const buscarCliente = () => {
    const cliente = {
      nome: "Emily Armstrong",
      nomeSocial: "Emily",
      telefone: "(11) 91234-5678",
      email: "emily@dead-sara.com",
    };
    setClienteEncontrado(cliente);
    setStep(2);
  };

  const voltar = () => {
    setStep(1);
    setCpfBusca("");
    setClienteEncontrado(null);
  };

  const fechar = () => {
    setStep(1);
    setCpfBusca("");
    setClienteEncontrado(null);
    onHide();
  };

  return (
    <Modal show={show} onHide={fechar} centered size="lg">
      <Modal.Header closeButton className="modalHeader">
        <Modal.Title>Buscar Cliente por CPF</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        {step === 1 && (
          <Form.Group className="mb-3">
            <Form.Label>Digite o CPF do cliente</Form.Label>
            <Form.Control
              type="text"
              value={cpfBusca}
              onChange={handleChange}
              placeholder="CPF"
            />
          </Form.Group>
        )}

        {step === 2 && clienteEncontrado && (
          <>
            <p>
              <strong>Nome:</strong> {clienteEncontrado.nome}
            </p>
            <p>
              <strong>Nome Social:</strong> {clienteEncontrado.nomeSocial}
            </p>
            <p>
              <strong>Telefone:</strong> {clienteEncontrado.telefone}
            </p>
            <p>
              <strong>Email:</strong> {clienteEncontrado.email}
            </p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
        {step === 1 && (
          <Button
            variant="primary"
            style={{
              backgroundColor: "rgb(69,32,23)",
              borderColor: "rgb(69,32,23)",
              marginRight: "auto",
            }}
            onClick={buscarCliente}
            disabled={!cpfBusca}
          >
            Buscar
          </Button>
        )}

        {step === 2 && (
          <Button
            style={{
              backgroundColor: "rgb(69,32,23)",
              borderColor: "rgb(69,32,23)",
              marginRight: "auto",
            }}
            onClick={voltar}
          >
            ⬅ Voltar
          </Button>
        )}

        <Button
          style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
          onClick={fechar}
        >
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BuscarClientePorCPF;
