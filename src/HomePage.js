import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Dashboard from './Dashboard';

function HomePage({ match }) {
  const { path } = match;
  return (
    <Container>
      <Route path={`${path}/dashboard`} component={Dashboard} />
    </Container>
  );
}

export default HomePage;
