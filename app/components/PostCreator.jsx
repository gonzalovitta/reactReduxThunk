// src/js/components/PostCreator.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addPost: newPost => dispatch(addPost(newPost))
  };
}
class addPostForm extends Component {
  constructor() {
    super();
    this.state = {
        name: "",
        desc: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const newPost = this.state;
    this.props.addPost(newPost);
    this.setState({ name: "", desc: "" });
  }
  render() {
    const newPost = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-inline">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control"
            id="name"
            value={newPost.name}
            onChange={this.handleChange}
            placeholder="Nombre"
          />
          &nbsp;
          <input
            type="text"
            className="form-control"
            id="desc"
            value={newPost.desc}
            onChange={this.handleChange}
            placeholder="Desc"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm" style={{marginLeft: 25+'px'}}>
          Crear
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(addPostForm);
export default Form;