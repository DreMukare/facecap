import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Dashboard from './Dashboard';
import Records from './Records';

function HomePage({ match }) {
  const { path } = match;
  return (
    <Container>
      <Route path={`${path}/dashboard`} component={Dashboard} />
      <Route path={`${path}/records`} component={Records} />
    </Container>
  );
}

export default HomePage;
