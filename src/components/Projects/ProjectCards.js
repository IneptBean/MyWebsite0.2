import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsSteam } from "react-icons/bs";
import { Link } from "react-router-dom";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}

        {props.steamLink && (
          <Button
            variant="primary"
            href={props.steamLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsSteam /> &nbsp; Steam
          </Button>
        )}

        {props.slug && (
          <Button
            as={Link}
            to={`/project/${props.slug}`}
            variant="primary"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Blog
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
