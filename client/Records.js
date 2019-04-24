import React from 'react';
import { Route } from 'react-router-dom';
import { Row, Table } from 'reactstrap';
import CreateRecord from './CreateRecord';
import StatsPage from './StatsPage';

function RecordsTable() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/api/students')
      .then(response => response.json())
      .then(setStudents);
  }, []);

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
        {students.map(
          ({ student_id, registration_number, first_name, last_name }) => (
            <tr
              key={student_id}
              onClick={() => {
                window.location.assign(
                  `/home/records/${student_id}/statistics`
                );
              }}
            >
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
      <Route
        exact
        path={`${path}/:student_id/statistics`}
        render={props => <StatsPage {...props} />}
      />
    </Row>
  );
}

export default Records;
