import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header/Header.component';
const PostList = lazy(() => import('./post-list/PostList.component'));

class MyComponent extends Component {

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header />
          <Route path="/posts" component={PostList} />
        </Router>
      </Suspense>
    );
  }
}
export default MyComponent;
