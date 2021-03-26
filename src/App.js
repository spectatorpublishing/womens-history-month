import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/home';
import News from './containers/news';
import AandE from './containers/AandE';
import Spectrum from './containers/Spectrum';
import Sports from './containers/Sports';
import Navbar from './components/navbar';
import ArticleTest from './containers/article-test';
import Credits from './containers/credits';
import Logo from './components/logo';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/article' component={Section} />
            <Route exact path='/article-test' component={ArticleTest} />
            <Route exact path='/news' component={Section} />
            <Route exact path='/a&e' component={Section} />
            <Route exact path='/spectrum' component={Section} />
            <Route exact path='/sports' component={Section} />
            <Route exact path='/credits' component={Credits} />
            <Route exact path='/credits' component={Section} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
