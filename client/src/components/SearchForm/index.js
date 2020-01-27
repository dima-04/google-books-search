import React from 'react';
import { Form, Button } from 'react-bootstrap';


function SearchForm() {
  return (
    <Form>
      <h3>Book Search</h3>
      <h5>Book</h5>
      <Form.Group controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
  </Button>
    </Form>
  );

}
export default SearchForm;