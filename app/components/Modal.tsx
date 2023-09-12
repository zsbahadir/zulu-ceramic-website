import { ReactNode, useState } from "react";
import Button from "./Button";

interface ModalProps {
  children: ReactNode;
  title: string | number;
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  //Destruct Props
  const { children, title, onClose } = props;

  //state
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)} width={0} height={0}>
        Open Modal
      </Button>
      {open ? (
        <div className="modal">
          <h1>{title}</h1>
          {children}
          <button onClick={onClose}>Close Modal</button>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
