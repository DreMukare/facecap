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
  const [isOpen, setIsOpen] = React.useState(true);
  const [selectedCourse, setSelectedCourse] = React.useState(null);
  const [units, setUnits] = React.useState([]);
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/api/courses')
      .then(response => response.json())
      .then(setCourses);
  }, []);

  React.useEffect(() => {
    if (selectedCourse) {
      fetch(`http://localhost:3000/api/units?course_id=${selectedCourse}`)
        .then(response => response.json())
        .then(setUnits);
    }
  }, [selectedCourse]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>New</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="courseName">Course</Label>
            <Input
              type="select"
              name="courseSelect"
              id="courseSelect"
              onChange={e => setSelectedCourse(e.target.value)}
            >
              <option>Select a course</option>
              {courses.map(({ course_id, course_name }) => (
                <option key={course_id} value={course_id}>
                  {course_name}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="unitName">unit</Label>
            <Input type="select" name="unitSelect" id="unitSelect">
              {units.map(({ unit_id, unit_name }) => (
                <option key={unit_id}>{unit_name}</option>
              ))}
            </Input>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Start
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CreateRecordModal;
