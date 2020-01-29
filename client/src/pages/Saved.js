import React, { Component } from "react";
import { Container } from "react-bootstrap";
// import SavedForm from "../components/SavedForm";
// import SavedResult from "../components/SearchResult";
import API from "../utils/APIs";

class Saved extends Component {
  state = {
    books: []
  }
  handleFormSubmit = event => {
    event.preventDefault();
    API.savedBooks().then(res => {
      const newState = { ...this.state };
      newState.books = res.data;
      this.setState(newState);
    }
    );
  }
  render() {
    return (
      <Container>
        {/* <SavedForm onSubmit={this.handleFormSubmit} />
        <SavedResult books={this.state.books} /> */}
      </Container>
    )

  };
};

export default Saved;
