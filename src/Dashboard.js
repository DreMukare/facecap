import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardTitle, Col, Row } from 'reactstrap';
import { ComposeIcon, FolderOpen } from './Icons';

function Option({ cta, to, icon }) {
  return (
    <Card body>
      <CardTitle className="text-center">{icon}</CardTitle>
      <Link to={to} className="text-decoration-none">
        <Button outline color="primary" block>
          {cta}
        </Button>
      </Link>
    </Card>
  );
}

function Dashboard() {
  return (
    <Row className="align-items-center">
      <Col sm="6">
        <Option
          cta="Take attendance"
          to="/home/records/capture"
          icon={<ComposeIcon />}
        />
      </Col>
      <Col sm="6">
        <Option cta="View records" to="/home/records" icon={<FolderOpen />} />
      </Col>
    </Row>
  );
}

export default Dashboard;
