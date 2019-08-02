import React, { Component, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
const PostsList = lazy(() => import('./posts-list/PostsList'));
const About = lazy(() => import('./about/About'));
import PostItem from './posts-list/post-item/PostItem';
import Footer from './footer/Footer';
import styles from './styles.css';

class MyComponent extends Component {

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <div className="wrapper">
            <Header />
            <Switch>
              <Route exact path="/posts" component={PostsList} />
              <Route exact path="/posts/:id" component={PostItem} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </Suspense>
    );
  }
}
export default MyComponent;
