import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Team() {
  return (
    <Container>
    <Row>
      <Col xs={6} md={4}>
        <Image src="assests/images/image1.svg" rounded />
      </Col>
      <Col xs={6} md={4}>
        <Image src="assests/images/image2.svg" roundedCircle />
      </Col>
      <Col xs={6} md={4}>
        <Image src="assests/images/image3.svg" thumbnail />
      </Col>
    </Row>
  </Container>
  )
}

export default Team
