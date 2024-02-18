import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ConfirmationModal({
  show,
  btnCloseText = "Close",
  btnCloseVariant = "outline-secondary",
  handleClose,
  btnConfirmText = "Confirm",
  btnConfirmVariant = "outline-success",
  handleConfirm,
  title,
  children,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant={btnCloseVariant} onClick={() => handleClose()}>
          {btnCloseText}
        </Button>
        <Button
          variant={btnConfirmVariant}
          onClick={() => {
            handleConfirm();
          }}
        >
          {btnConfirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
