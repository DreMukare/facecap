import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Card, CardTitle, Col, Row } from 'reactstrap';

const CustomLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

function Option({ cta, to }) {
  return (
    <Card body>
      <CardTitle />
      <CustomLink to={to}>
        <Button outline color="primary" block>
          {cta}
        </Button>
      </CustomLink>
    </Card>
  );
}

function Dashboard() {
  return (
    <Row>
      <Col sm="6">
        <Option cta="Take attendance" to="/" />
        <Option cta="View records" to="/home/records" />
      </Col>
    </Row>
  );
}

export default Dashboard;
