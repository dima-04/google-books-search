import React, { Component } from "react";
import { Container } from "react-bootstrap";
import API from "../utils/APIs";
import SearchResult from "../components/SearchResult";

class Saved extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    API.getSavedBooks().then(res => {
      const newState = { ...this.state };
      newState.books = res.data;
      this.setState(newState);
    });
  };

  handleDeleteClick = event => {
    console.log(event);
    const id = event.target.attributes.getNamedItem("data-id").value;
    API.deleteBook(id).then(res => {
      console.log("if you happy and you know it ");
    });
  }
  render() {
    return (
      <Container>
        <SearchResult books={this.state.books} header="Saved Books" buttonText="Delete" onButtonClick={this.handleDeleteClick} />
      </Container>
    )

  };
};

export default Saved;
