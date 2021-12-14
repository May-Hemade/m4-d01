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
        <Row>
          <Col>
            <Row className="justify-content-center h-100">
              {books.map((book) => (
                <Col xs={12} md={6} lg={3}>
                  <Card
                    key={book.asin}
                    onClick={() => {
                      this.setState({ selectedBook: book })
                    }}
                  >
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.category}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={2} className="border h-25">
            <h3>Price</h3>
            <p>{this.state.selectedBook && this.state.selectedBook.price}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
