import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/pfpSabine.webp";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>

        {/* Box */}
        <div className="brutalist-box">

          {/* Row 1: Avatar */}
          <Row className="justify-content-center">
            <Col md="auto" className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>

          {/* Row 2: Text */}
          <Row>
            <Col className="home-about-description  mt-4">
              <h1 className="text-black" style={{ fontSize: "2.6em" }}>
                Hello There
              </h1>
              <p className="home-about-body text-black">
                I’m a UI/UX programmer who also has experience as a graphics programming and gameplay programming. My goal is to bring things to life, make something that stands out.
                <br />
                <br />
                I’m proficient in
                <i>
                  <b className="purple">
                    {" "}C++, C, and C#{" "}
                  </b>
                </i>
               
                <br />
                <br />
                My key areas of interest include developing
                <i>
                  <b className="purple">
                    {" "}UI/UX, Graphics, Gameplay{" "}
                  </b>
                </i>
              .
              </p>
            </Col>
          </Row>

          {/* Row 3: Navigation Links */}
          <Row className="justify-content-center mt-4">
            <Col className="d-flex justify-content-around flex-wrap">

              <Link to="/about" className="pixel-box text-black">
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Link>
              <Link to="/project" className="pixel-box  text-black">
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Link>
              <Link to="/resume" className="pixel-box  text-black">
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Link>
              
            </Col>
          </Row>

        </div>
      </Container>
    </Container>
  );
}

export default Home2;
