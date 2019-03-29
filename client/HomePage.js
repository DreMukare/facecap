import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Dashboard from './Dashboard';
import Records from './Records';
import Navigation from './Navigation';

function formatCase(string) {
  return string.substr(0, 1).toUpperCase() + string.substr(1);
}

function HomePage({ match }) {
  const { path } = match;
  const [location] = window.location.pathname.split('/').slice(-1);
  return (
    <React.Fragment>
      <Navigation />
      <Container className="p-4">
        <h4 className="mb-4">{formatCase(location)}</h4>
        <Route path={`${path}/dashboard`} component={Dashboard} />
        <Route path={`${path}/records`} component={Records} />
      </Container>
    </React.Fragment>
  );
}

export default HomePage;
