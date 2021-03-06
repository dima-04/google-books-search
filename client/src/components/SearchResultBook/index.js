import React from 'react';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';

function SearchResultBook(props) {
  console.log(props.books);
  console.log(props);
  return (
    <Container className="border border-dark rounded m-3 p-2">
      <Row >
        <Col>
          <h4>{props.book.title}</h4>
          <h6>{props.book.authors}</h6>
        </Col>
        <Col xs={2}>
          <a target="_blank" rel={props.book.link} href={props.book.link}>
            <Button className="ml-1" variant="primary">View</Button>
          </a>
          <Button className="ml-1" variant="primary" data-id={props.book._id} onClick={props.onClick}>{props.buttonText}</Button>
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