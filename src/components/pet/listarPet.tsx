import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

interface Pet {
  id: number;
  nome: string;
  genero: string;
  raca: string;
  tipo: string;
  donoNome: string;
}

interface Props {
  show: boolean;
  onHide: () => void;
}

const ListarPets: React.FC<Props> = ({ show, onHide }) => {
  const [step, setStep] = useState(1);
  const petsPorPagina = 2;

  const pets: Pet[] = [
    { id: 1, nome: "Emilinha", genero: "Fêmea", raca: "Pinscher", tipo: "Cachorro", donoNome: "Emily Armstrong" },
    { id: 2, nome: "Chazy", genero: "Macho", raca: "Siâmes", tipo: "Gato", donoNome: "Chester Bennington" },
    { id: 3, nome: "Shinodinho", genero: "Macho", raca: "Canário", tipo: "Pássaro", donoNome: "Mike Shinoda" },
    { id: 4, nome: "Badauino", genero: "Fêmea", raca: "Betta", tipo: "Peixe", donoNome: "Fernando Badaui" },
    { id: 5, nome: "Detonautinha", genero: "Macho", raca: "Iguana", tipo: "Réptil", donoNome: "Tico Santa Cruz" },
    { id: 6, nome: "Rappinha", genero: "Fêmea", raca: "Anão", tipo: "Coelho", donoNome: "Marcelo Falcão" },
  ];

  const totalPages = Math.ceil(pets.length / petsPorPagina);

  const next = () => {
    setStep((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const back = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const start = (step - 1) * petsPorPagina;
  const end = start + petsPorPagina;
  const petsPagina = pets.slice(start, end);

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton className="modalHeader">
        <Modal.Title>Lista de Pets</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        {petsPagina.map((pet) => (
          <div
            key={pet.id}
            style={{
              marginBottom: "1rem",
              borderBottom: "1px solid #ddd",
              paddingBottom: "0.5rem",
            }}
          >
            <p><strong>Nome do Pet:</strong> {pet.nome}</p>
            <p><strong>Gênero:</strong> {pet.genero}</p>
            <p><strong>Raça:</strong> {pet.raca}</p>
            <p><strong>Tipo:</strong> {pet.tipo}</p>
            <p><strong>Nome do Dono:</strong> {pet.donoNome}</p>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "rgb(255, 161, 106)" }}>
        <Button
          style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
          onClick={back}
          disabled={step === 1}
        >
          ⬅ Voltar
        </Button>
        <Button
          style={{ backgroundColor: "rgb(69,32,23)", borderColor: "rgb(69,32,23)" }}
          onClick={next}
          disabled={end >= pets.length}
        >
          Próximo ➡
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ListarPets;
