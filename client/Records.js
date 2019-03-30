import React from 'react';
import { Route } from 'react-router-dom';
import { Row, Table } from 'reactstrap';
import CreateRecord from './CreateRecord';

function RecordsTable() {
  const [recordsState, set] = React.useState({
    data: []
  });
  const setState = next => set(Object.assign({}, recordsState, next));

  React.useEffect(() => {
    fetch('http://localhost:3000/api/students')
      .then(response => response.json())
      .then(data => setState({ data }));
  }, [recordsState.data.length]);

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Registration</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {recordsState.data.map(
          ({ student_id, registration_number, first_name, last_name }) => (
            <tr key={student_id}>
              <th scope="row">{registration_number}</th>
              <td>{first_name}</td>
              <td>{last_name}</td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
}

function Records({ match }) {
  const { path } = match;
  return (
    <Row>
      <Route exact path={path} component={RecordsTable} />
      <Route exact path={`${path}/capture`} component={CreateRecord} />
    </Row>
  );
}

export default Records;
