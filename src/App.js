import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={LoginPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
