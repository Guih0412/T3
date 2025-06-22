import React, { useState, ChangeEvent } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

interface Pet {
  nome: string;
  genero: string;
  raca: string;
  tipo: string;
  rg: string;
}

const CadastrarPet: React.FC<Props> = ({ show, onHide }) => {
  const [step, setStep] = useState(1);
  const [cpfDono, setCpfDono] = useState("");
  const [pet, setPet] = useState<Pet>({
    nome: "",
    genero: "",
    raca: "",
    tipo: "",
    rg: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "cpfDono") {
      setCpfDono(value);
    } else {
      setPet(prev => ({ ...prev, [name]: value }));
    }
  };

  const next = () => {
    if (step < 2) setStep(step + 1);
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSalvar = () => {
    alert("Pet cadastrado com sucesso!");
    setStep(1);
    setCpfDono("");
    setPet({ nome: "", genero: "", raca: "", tipo: "", rg: "" });
    onHide();
  };

  const handleVoltar = () => {
    setStep(1);
    setCpfDono("");
    setPet({ nome: "", genero: "", raca: "", tipo: "", rg: "" });
    onHide();
  };

  return (
    <Modal show={show} onHide={handleVoltar} centered size="lg">
      <Modal.Header closeButton className="modalHeader">
        <Modal.Title>Cadastro de Pet</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <Form>
          {step === 1 && (
            <Form.Group className="mb-3">
              <Form.Label>CPF do Dono</Form.Label>
              <Form.Control
                type="text"
                name="cpfDono"
                value={cpfDono}
                onChange={handleChange}
              />
            </Form.Group>
          )}

          {step === 2 && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>RG do Pet</Form.Label>
                <Form.Control
                  type="text"
                  name="rg"
                  value={pet.rg}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={pet.nome}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Gênero</Form.Label>
                <Form.Control
                  type="text"
                  name="genero"
                  value={pet.genero}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Raça</Form.Label>
                <Form.Control
                  type="text"
                  name="raca"
                  value={pet.raca}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                  type="text"
                  name="tipo"
                  value={pet.tipo}
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
        {step > 1 && (
          <Button
            style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
            onClick={back}
          >
            ⬅ Voltar
          </Button>
        )}
        {step < 2 && (
          <Button
            style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
            onClick={next}
            disabled={!cpfDono.trim()}
          >
            Próximo ➡
          </Button>
        )}
        {step === 2 && (
          <Button
            style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
            onClick={handleSalvar}
          >
            📝 Cadastrar
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CadastrarPet;
