import React from 'react';
import { Col, Table } from 'reactstrap';
import Modal from './Modal';
import Camera from './Camera';

function CreateRecord() {
  const [students, setStudents] = React.useState([]);
  const [clicked, setClicked] = React.useState(false);
  const toggleClicked = () => {
    if (clicked) {
      return window.alert('Student is already registered or does not exist!');
    }
    setClicked(true);
  };

  React.useEffect(() => {
    fetch('http://localhost:3000/api/students')
      .then(response => response.json())
      .then(setStudents);
  }, []);

  return (
    <React.Fragment>
      <Modal />
      <Col sm="6">
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Registration</th>
            </tr>
          </thead>
          <tbody>
            {students
              .slice(0, clicked)
              .map(({ student_id, registration_number }, index) => (
                <tr key={student_id}>
                  <th scope="row">{++index}</th>
                  <td>{registration_number}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Col>
      <Col sm="6">
        <Camera toggleClicked={toggleClicked} />
      </Col>
    </React.Fragment>
  );
}

export default CreateRecord;
