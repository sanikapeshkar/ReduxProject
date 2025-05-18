import React from "react";
import styles from "./Modal.module.css";
import { ModalProps } from "./Modal.types";
import Button from "../Button/Button";


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <Button type="button" className={styles.closeButton} onClick={onClose}>
            &times;
          </Button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
