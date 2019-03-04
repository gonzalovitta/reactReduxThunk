// src/js/components/App.jsx
import React from "react";
// import List from "./List";
// import Form from "./Form.jsx";
import Filter from "./Filter.jsx";
import PostList from "./PostList.jsx";
import PostCreator from "./PostCreator.jsx";

const App = () => (
  <div className="row mt-5">
    {/* <div className="col-md-6 offset-md-1">
    <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-6 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div> */}
    <div className="col-md-7 offset-md-1">
      <Filter />
    </div>
    <div className="col-md-7 offset-md-1">
      <PostList />
    </div>
    <div className="col-md-7 offset-md-1">
      <PostCreator />
    </div>
  </div>
);
export default App;