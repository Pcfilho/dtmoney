import Modal from "react-modal";

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({isOpen, onRequestClose} : Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Nova transação</h2>

    </Modal>
  )
}