import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPostData,
  getPostComments
} from './postItem.actions';
import styles from './postItem.styles.css';

class PostItem extends Component {

  componentDidMount() {
    const { match } = this.props;
    this.props.getPostData(match.params.id);
    this.props.getPostComments(match.params.id);
  }

  render() {
      const { post, comments, author } = this.props.postItem;

    return (
      <div className={`${styles.post} container`}>
        <img src="https://picsum.photos/1024/768" alt="Image" />
        <div className={styles.author}>
          <span>{author.name}</span>
          <span>{author.username}</span>
          <span>{author.website}</span>
          <span>{author.phone}</span>
        </div>
        <div className={styles.content}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <div className={styles.comments}>
          <h3 className={styles.title}>Comments</h3>
          {comments.map(comment => (
            <div className={styles.comment} key={comment.id}>
              <p className={styles['comment-author']}>
                {comment.name}
                <span>({comment.email})</span>
              </p>
              <p className={styles['comment-body']}>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  postItem: state.postItem
}), {
  getPostData,
  getPostComments
})(PostItem);
