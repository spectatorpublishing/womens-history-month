import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/home';
import Section from './containers/section';
import Navbar from './components/navbar';
import ArticleTest from './containers/article-test';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/article' component={Section} />
            <Route exact path='/article-test' component={ArticleTest} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
