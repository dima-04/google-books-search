import React, { Component } from "react";
import { Container,Alert } from "react-bootstrap";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";
import API from "../utils/APIs";

class Search extends Component {
  state = {
    books: [],
    showAlert:false
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
  handelSaveClick = event => {
    const id = event.target.attributes.getNamedItem("data-id").value;
    API.saveBooks(id).then(res => {
      this.showAlert(true);
    });
  }

  showAlert = (show)=>{
    const newState = { ...this.state };
      newState.showAlert = show;
      this.setState(newState);
      
    }

  render() {
    return (
      <Container>
        <Alert variant="success" show={this.state.showAlert} onClose={() => this.showAlert(false)} dismissible>
          Book Is Saved
        </Alert>
        <SearchForm onSubmit={this.handleFormSubmit} />
        <SearchResult books={this.state.books} header="Results" buttonText="Save" onButtonClick={this.handelSaveClick} />
      </Container>
    )

  };
};

export default Search;
