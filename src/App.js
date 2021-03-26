import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/home';
import News from './containers/news';
import AandE from './containers/AandE';
import Spectrum from './containers/Spectrum';
import Sports from './containers/Sports';
import Navbar from './components/navbar';
import ArticleTest from './components/articleCards';
import Logo from './components/logo';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/news' component={News} />
            <Route exact path='/a&e' component={AandE} />
            <Route exact path='/spectrum' component={Spectrum} />
            <Route exact path='/sports' component={Sports} />
            <Route exact path='/credits' component={News} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
