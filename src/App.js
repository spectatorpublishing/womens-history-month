import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './containers/home';
import { Section } from './containers/section';

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/article' component={Section} />
        </Switch>
      </Router>
  );
}

export default App;
