import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
import {Container, Row, Col} from "react-bootstrap"

function Footer() {
  return (
    <div className="fixed-bottom bg-dark">
        <Container>
          <Row>
            <Col md="4"></Col>
            <Col>
              <div style={{color:'white'}}>Designed by Dhruvin Patel</div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
