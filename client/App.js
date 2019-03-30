import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute path="/home" component={HomePage} redirectPath="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
