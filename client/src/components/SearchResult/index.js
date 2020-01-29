import React from 'react';
import { Container } from 'react-bootstrap';
import SearchResultBook from '../SearchResultBook';

function SearchResult(props) {
  return (
    <Container className="mt-5">
      <h3>Result</h3>
      {props.books.map(book =>
        <SearchResultBook book={book} onClick={props.onSaveClick} />)}
    </Container>
  );

}
export default SearchResult;