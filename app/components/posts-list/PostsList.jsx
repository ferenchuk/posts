import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPostsList
} from './postList.actions';
import styles from './postList.styles.css';
import Pagination from './../shared/pagination/Pagination';

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      pagePosts: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    this.props.getPostsList();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.setState({posts: this.props.posts.items});
    }

  }

  onChangePage(pagePosts) {
    this.setState({ pagePosts: pagePosts });
  }

  render() {
    const { pagePosts } = this.state;

    return (
      <div>
        <div className={styles['post-list-wrapper']}>
          {pagePosts && pagePosts.map(post => (
            <div className={styles['post-list-item']} key={post.id}>
              <img src="https://source.unsplash.com/WLUHO9A_xik/800x450" alt="" />
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
        <Pagination items={this.state.posts} onChangePage={this.onChangePage} />
      </div>
    );
  }
}


export default connect(state => ({
   posts: state.postList
}), {
  getPostsList
})(PostsList);
