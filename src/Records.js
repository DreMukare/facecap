import React from 'react';
import { Route } from 'react-router-dom';
import { Row, Table } from 'reactstrap';
import CreateRecord from './CreateRecord';

function RecordsTable() {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Registration</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">xxx-xxx-xxxx</th>
          <td>human</td>
          <td>being</td>
        </tr>
      </tbody>
    </Table>
  );
}
function Records({ match }) {
  const { path } = match;
  return (
    <React.Fragment>
      <h4>Records</h4>
      <Row>
        <Route exact path={path} component={RecordsTable} />
        <Route exact path={`${path}/create`} component={CreateRecord} />
      </Row>
    </React.Fragment>
  );
}

export default Records;
