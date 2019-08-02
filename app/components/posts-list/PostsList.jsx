import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPostsList
} from './postList.actions';
import styles from './postList.styles.css';

class PostsList extends Component {

  componentDidMount() {
    this.props.getPostsList();
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts && posts.items.map(post => (
          <div className={styles.postListItem} key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}


export default connect(state => ({
   posts: state.postList
}), {
  getPostsList
})(PostsList);
