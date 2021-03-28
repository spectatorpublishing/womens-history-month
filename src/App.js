import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/home';
import Section from './containers/Section';
import Navbar from './components/navbar';
// import ArticleTest from './containers/article-test';
import Credits from './containers/credits';
import Logo from './components/logo';
import ScrollToTop from "./components/ScrollToTop";
import { news_articles } from './data/articles';
import { a_and_e_articles } from './data/articles';
import { spectrum_articles } from './data/articles';
import { sports_articles } from './data/articles';

const App = () => {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <ScrollToTop>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/credits' component={Credits} />
            <Route
              exact path='/news'
              render={(props) => (
                <Section {...props} articles={news_articles} header='News' next='Arts & Entertainment' nextLink='/a&e'/>
              )}
            />
            <Route
              exact path='/a&e'
              render={(props) => (
                <Section {...props} articles={a_and_e_articles} header='Arts & Entertainment' next='Spectrum' nextLink='/spectrum'/>
              )}
            />
            <Route
              exact path='/spectrum'
              render={(props) => (
                <Section {...props} articles={spectrum_articles} header='Spectrum' next='Sports' nextLink='/sports'/>
              )}
            />
            <Route
              exact path='/sports'
              render={(props) => (
                <Section {...props} articles={sports_articles} header='Sports' next='Credits' nextLink='/credits'/>
              )}
            />
            <Route exact path='/credits' component={Home} />
        </Switch>
        </ScrollToTop>
      </Router>
  );
}

export default App;
