import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from 'reactstrap';

function CreateRecordModal() {
  const [modalState, set] = React.useState({
    isOpen: true
  });

  const toggle = () =>
    set(Object.assign({}, modalState, { isOpen: !modalState.isOpen }));

  return (
    <Modal isOpen={modalState.isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>New</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="courseName">Course</Label>
            <Input type="select" name="courseSelect" id="courseSelect">
              <option>1</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="unitName">unit</Label>
            <Input type="select" name="unitSelect" id="unitSelect">
              <option>1</option>
            </Input>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary">Start</Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CreateRecordModal;
