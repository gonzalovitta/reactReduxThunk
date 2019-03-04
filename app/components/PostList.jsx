import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getData, delPost } from "../actions/index";
import Post from './Post.jsx'

class PostList extends Component {

    constructor() {
        super();
      }
      
    componentDidMount() {
        this.props.getData();
    }

    delPost(post){
        event.preventDefault();
        this.props.delPost(post);
    }

  render() {
    return (
        <table className="table">
        <thead>
            <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            {this.props.posts.map(post =>  <Post delete={this.props.delPost} key={post.id} post={post} />)}
        </tbody>
        </table>
    )
  }
};

const mapStateToProps = state => {
  return {
    posts: state.remoteArticles,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delPost: post => dispatch(delPost(post)),
    getData: () => dispatch(getData())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList);