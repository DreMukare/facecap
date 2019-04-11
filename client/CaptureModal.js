import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function CaptureModal({ isOpen, toggle, imageSrc, toggleClicked }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Capture</ModalHeader>
      <ModalBody>
        <img src={imageSrc} width="200" height="200" />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            toggle();
            toggleClicked();
          }}
        >
          Accept
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CaptureModal;
