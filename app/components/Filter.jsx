// src/js/components/Filter.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { filterPosts } from "../actions/index";
function mapDispatchToProps(dispatch) {
  return {
    filterPosts: searchText => dispatch(filterPosts(searchText))
  };
}
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
        searchText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { searchText } = this.state;
    this.props.filterPosts({ searchText });
    this.setState({ searchText: searchText });
  }
  render() {
    const { searchText } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="searchText"
            value={searchText}
            onChange={this.handleChange}
            placeholder="Filtro de Nombre"
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SEARCH
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;