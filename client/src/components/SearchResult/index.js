import React from 'react';
import { Container } from 'react-bootstrap';
import SearchResultBook from '../SearchResultBook';

function SearchResult(props) {
  return (
    <Container className="mt-5">
      <h3>{props.header}</h3>
      {props.books.map(book =>
        <SearchResultBook key={book._id} book={book} buttonText={props.buttonText} onClick={props.onButtonClick} />)}
    </Container>
  );

}
export default SearchResult;