import React, { useState, ChangeEvent } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

const ExcluirCliente: React.FC<Props> = ({ show, onHide }) => {
  const [step, setStep] = useState(1);
  const [cpf, setCpf] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  const next = () => {
    setStep(2);
  };

  const back = () => {
    onHide();
    setStep(1);
    setCpf("");
  };

  const handleConfirm = () => {
    alert("Cliente excluído com sucesso!");
    onHide();
    setStep(1);
    setCpf("");
  };

  return (
    <Modal show={show} onHide={back} centered size="lg">
      <Modal.Header closeButton className="modalHeader">
        <Modal.Title>Excluir Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        {step === 1 && (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Digite o CPF do cliente a ser excluido</Form.Label>
              <Form.Control
                type="text"
                name="cpf"
                value={cpf}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        )}

        {step === 2 && (
          <p>
            Tem certeza que deseja excluir o cliente?
            
            <br />
            Essa ação não poderá ser desfeita.
          </p>
        )}
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
        {step > 1 && (
          <Button
            style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
            onClick={() => setStep(1)}
          >
            ⬅ Voltar
          </Button>
        )}
        {step === 1 && (
          <Button
            style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
            onClick={next}
          >
            Próximo ➡
          </Button>
        )}
        {step === 2 && (
          <Button
            style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
            onClick={handleConfirm}
          >
            🗑️ Excluir
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ExcluirCliente;
