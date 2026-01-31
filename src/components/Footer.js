import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  
  

  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="4">
        </Col>
        <Col md="4" className="footer-copywright text-center">
          <h3>&copy; {new Date().getFullYear()} Sabine Aliev</h3>
        </Col>
        <Col
          md="4"
          className="footer-body d-flex justify-content-end"
        >
          <ul className="footer-icons d-flex justify-content-end mb-0">
            <li className="social-icons">
              <a
                href="https://github.com/IneptBean"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sabine-aliev/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/ineptsoybean/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
