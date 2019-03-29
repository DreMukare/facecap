import React from 'react';
import { Row, Table } from 'reactstrap';

function Records() {
  return (
    <Row>
      <h4>Records</h4>
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
    </Row>
  );
}

export default Records;
