import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

type Type = "deposit" | "withdraw";

Modal.setAppElement("#root");

export function NewTransactionModal({ isOpen, onRequestClose }: Props) {
  const [type, setType] = useState<Type>("deposit");
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event : FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type
    }

    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título" value={title} onChange={({ target }) => setTitle(target.value)}/>

        <input type="number" placeholder="Valor" value={value} onChange={({ target }) => setValue(Number(target.value))}/>

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange={({ target }) => setCategory(target.value)} />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
