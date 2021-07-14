import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <h3 className="text-dark">Copyright 2021 &copy;</h3>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
