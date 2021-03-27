import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/home';
import News from './containers/news';
import Navbar from './components/navbar';
import { news_articles } from './data/news_articles';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact path='/news'
              render={(props) => (
                <News {...props} articles={news_articles} header='News' next='Arts & Entertainment' nextLink='/a&e'/>
              )}
            />
            <Route
              exact path='/a&e'
              render={(props) => (
                <News {...props} articles={news_articles} header='Arts & Entertainment' next='Spectrum' nextLink='/spectrum'/>
              )}
            />
            <Route
              exact path='/spectrum'
              render={(props) => (
                <News {...props} articles={news_articles} header='Spectrum' next='Sports' nextLink='/sports'/>
              )}
            />
            <Route
              exact path='/sports'
              render={(props) => (
                <News {...props} articles={news_articles} header='Sports' next='Credits' nextLink='/credits'/>
              )}
            />
            <Route
              exact path='/credits'
              render={(props) => (
                <News {...props} articles={news_articles} header='Credits' next='Home' nextLink='/'/>
              )}
            />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
