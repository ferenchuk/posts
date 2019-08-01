import React, { Component, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header/Header';
const PostsList = lazy(() => import('./posts-list/PostsList'));
const About = lazy(() => import('./about/About'));

class MyComponent extends Component {

  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Header />
            <Switch>
              <Route path="/posts" component={PostsList} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>
        </Suspense>
      </div>
    );
  }
}
export default MyComponent;