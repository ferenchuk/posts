import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getPostsList
} from './postList.actions';

class PostsList extends Component {

    componentDidMount() {
        this.props.getPostsList();
    }

    render() {
        return (
          <div>Post list</div>
        );
    }
}

export default connect(null, {
    getPostsList
})(PostsList);
