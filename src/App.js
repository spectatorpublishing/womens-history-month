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
            <Route path='/' component={Home} />
            <Route
              path='/news'
              render={(props) => (
                <News {...props} articles={news_articles} header='News' next='Arts & Entertainment' nextLink='/a&e'/>
              )}
            />
            <Route
              path='/a&e'
              render={(props) => (
                <News {...props} articles={news_articles} header='Arts & Entertainment' next='Spectrum' nextLink='/spectrum'/>
              )}
            />
            <Route
              path='/spectrum'
              render={(props) => (
                <News {...props} articles={news_articles} header='Spectrum' next='Sports' nextLink='/sports'/>
              )}
            />
            <Route
              path='/sports'
              render={(props) => (
                <News {...props} articles={news_articles} header='Sports' next='Credits' nextLink='/credits'/>
              )}
            />
            <Route
              path='/credits'
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
