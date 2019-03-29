import React from 'react';
import { Col, Table } from 'reactstrap';
import Modal from './Modal';

function CreateRecord() {
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
            <tr>
              <th scope="row">1</th>
              <td>xxx-xxx-xxxx</td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col sm="6">
        <video />
      </Col>
    </React.Fragment>
  );
}

export default CreateRecord;
