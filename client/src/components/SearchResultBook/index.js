import React from 'react';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';

function SearchResultBook(props) {
  console.log(props.books);
  console.log(props);
  return (
    <Container>
      <Row >
        <Col fluid>
          <h4>{props.book.title}</h4>
          <h6>{props.book.authors}</h6>
        </Col>
        <Col xs={2}>
          <a target="_blank" href={props.book.link}>
            <Button className="ml-1" variant="primary">View</Button>
          </a>
          <Button className="ml-1" variant="primary" data-id={props.book._id} onClick={props.onClick}>Save</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={2}>
          <Image src={props.book.image} />
        </Col>
        <Col>
          <p>{props.book.description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchResultBook;