import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPosts, delPost } from "../actions/index";
import Post from './Post.jsx'

class PostList extends Component {

    constructor() {
        super();
      }
      
    componentDidMount() {
        this.props.getPosts();
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
            {this.props.posts
                .filter( (item) => item.name.toLowerCase().includes(this.props.searchText.toLowerCase()))
                .map(post =>  <Post delete={this.props.delPost} key={post.id} post={post} />)}
        </tbody>
        </table>
    )
  }
};

const mapStateToProps = state => {
  return {
    posts: state.remotePosts,
    searchText: state.searchText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delPost: post => dispatch(delPost(post)),
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList);