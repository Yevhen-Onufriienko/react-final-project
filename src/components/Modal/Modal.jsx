import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  function stopPropagation(e) {
    e.stopPropagation();
  }

  if (isOpen) {
    return (
      <div className={styles.Modal} onClick={onClose}>
        <div className={styles.ModalContent} onClick={stopPropagation}>
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;