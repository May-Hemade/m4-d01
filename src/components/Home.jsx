import { Component } from "react"
import { Card, Container, Row, Col } from "react-bootstrap"
import books from "../data/books.json"

class Home extends Component {
  state = {
    selectedBook: null,
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          {books.map((book) => (
            <Col xs={12} md={6} lg={4}>
              <Card key={book.asin}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default Home
