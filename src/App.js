import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/home';
import Section from './containers/section';
import Navbar from './components/navbar';
import Logo from './components/logo';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/article' component={Section} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
