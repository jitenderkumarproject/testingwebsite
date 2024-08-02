import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

function HomeIntro1() {
  return (

    <Container>
      <Row>
        <Col>
        <Card>
      
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col><Image src="assests/images/image2.svg"  />
        </Col>
      </Row>
     
    </Container>

    
  )
}

export default HomeIntro1
