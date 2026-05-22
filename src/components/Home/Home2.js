import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
//import myImg from "../../Assets/pfpSabine.webp";
import myPFP from "../../Assets/pfpSabine.png";
import { Link } from "react-router-dom";
import {
  
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";


function Home2() {




  return (
    <Container fluid className="home-about-section" id="about">
      <Container>

          <Row className="justify-content-center">
            <Col md="auto" className="myAvtar">
              <Tilt>
                <img src={myPFP} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <br>
          </br>
        {/* Box */}
        <div className="portfolio-box">
          <div className="portfolio-box-inner">


          {/* Row 2: Text */}
          <Row>
            <Col className="home-about-description  mt-4">
              <h1 className="text-black" style={{ fontSize: "2.6em" ,  textAlign: "center"} }>
                Hello There
              </h1>
              <p className="home-about-body text-black" >
                My name is Sabine, but most call me Bean. I am a UI/UX Programmer and Designer, with skills in Technical Design,
Graphics Engineering, and Gameplay. My passion is combine my technical, design, and art skills into making games that I am
proud to call mine.
              </p>
            </Col>
          </Row>

          {/* Row 3: Navigation Links */}

          </div>
        </div>
                  <Row className="justify-content-center mt-4">
            <Col className="d-flex justify-content-around flex-wrap">

              <Link to="/portfolio" className="pixel-box text-black">
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Portfolio
              </Link>
              <Link to="/project" className="pixel-box  text-black">
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Link>
              <Link to="/resume" className="pixel-box  text-black">
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Link>


            </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Home2;
