import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";
import API from "../utils/APIs";

class Search extends Component {
  state = {
    books: []
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const search = event.target.elements.book.value;
    API.searchBooks(search).then(res => {
      const newState = { ...this.state };
      newState.books = res.data;
      this.setState(newState);
    }
    );
  }
  handelSaveClick = event =>{
    const id = event.target.attributes.getNamedItem("data-id").value;
    API.saveBooks(id).then(res => {
      console.log("if you happy and you know it ");
  });
}



  render() {
    return (
      <Container>
        <SearchForm onSubmit={this.handleFormSubmit} />
        <SearchResult books={this.state.books} onSaveClick={this.handelSaveClick} />
      </Container>
    )

  };
};

export default Search;
