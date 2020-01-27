import React from "react";
import { Container } from "react-bootstrap";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";


function Search() {
  return(
  <Container>
    <SearchForm/>
    <SearchResult/>
  </Container>
  )
  
};

export default Search;
