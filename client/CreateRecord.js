import React from 'react';
import { Col, Table } from 'reactstrap';
import Modal from './Modal';
import Camera from './Camera';

function CreateRecord() {
  const [recordsState, set] = React.useState({
    data: [],
    clicked: null
  });
  const setState = next => set(Object.assign({}, recordsState, next));
  const toggleClicked = () => {
    if (recordsState.clicked !== null) {
      return window.alert('Student is already registered or does not exist!');
    }
    setState({ clicked: 1 });
  };

  React.useEffect(() => {
    fetch('http://localhost:3000/api/students')
      .then(response => response.json())
      .then(data => setState({ data }));
  }, [recordsState.data.length]);

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
            {recordsState.data
              .slice(0, recordsState.clicked)
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
