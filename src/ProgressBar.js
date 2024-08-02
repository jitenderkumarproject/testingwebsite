import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

function HomeProgressBar() {
  return (
    <Container>
      <Row>
        <Col>
          {/* This column is currently empty. Add content here if needed. */}
          fsdfsdfdsf
        </Col>
        <Col>
          <h5>Our Satisfied Clients</h5>
          <ProgressBar now={60} />
          <br />
          <h5>Our Project Completion Rate</h5>
          <ProgressBar now={75} />
          <br />
          <h5>Customer Satisfaction</h5>
          <ProgressBar now={85} />
          <br />
          <h5>Employee Satisfaction</h5>
          <ProgressBar now={90} />
          <br />
          <h5>Growth Rate</h5>
          <ProgressBar now={70} />
          <br />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeProgressBar;
