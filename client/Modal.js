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
    isOpen: true,
    courses: [],
    units: [],
    selectedCourse: null
  });

  const setState = next => set(Object.assign({}, modalState, next));

  React.useEffect(() => {
    fetch('http://localhost:3000/api/courses')
      .then(response => response.json())
      .then(courses => setState({ courses }));
  }, [modalState.courses.length]);

  React.useEffect(() => {
    if (modalState.selectedCourse) {
      fetch(
        `http://localhost:3000/api/units?course_id=${modalState.selectedCourse}`
      )
        .then(response => response.json())
        .then(units => setState({ units }));
    }
  }, [modalState.selectedCourse]);

  const toggle = () => setState({ isOpen: !modalState.isOpen });

  return (
    <Modal isOpen={modalState.isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>New</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="courseName">Course</Label>
            <Input
              type="select"
              name="courseSelect"
              id="courseSelect"
              onChange={e => setState({ selectedCourse: e.target.value })}
            >
              <option>Select a course</option>
              {modalState.courses.map(({ course_id, course_name }) => (
                <option key={course_id} value={course_id}>
                  {course_name}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="unitName">unit</Label>
            <Input type="select" name="unitSelect" id="unitSelect">
              {modalState.units.map(({ unit_id, unit_name }) => (
                <option key={unit_id}>{unit_name}</option>
              ))}
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
