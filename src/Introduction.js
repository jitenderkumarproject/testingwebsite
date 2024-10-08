import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Introduction() {
  return (
    <Container>
      <Row>
        <Col>
        <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card>
        <Card.Img variant="top" src="assests/images/1.png" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
      </Row>
      </Container>
  )
}

export default Introduction
