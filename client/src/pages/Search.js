import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";
import API from "../utils/APIs";

class Search extends Component {
  handleFormSubmit = event => {
    event.preventDefault();
    const search = event.target.elements.book.value;
    API.searchBooks(search).then(res =>
      console.log(res)

    )
  }


  render() {
    return (
      <Container>
        <SearchForm onSubmit={this.handleFormSubmit} />
        <SearchResult />
      </Container>
    )

  };
};

export default Search;
