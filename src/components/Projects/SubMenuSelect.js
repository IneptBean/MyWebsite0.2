import React from "react";
import { Link } from "react-router-dom";


  function SubMenu(props) {
    return (
      <Link to={`/project/${props.slug}`}>
        <button className="project-card-view submenu-btn">
          <h3 className="submenu-title">{props.title}</h3>
          <img src={props.imgPath} alt="card-img"/>
        </button>
      </Link>
    );
  }


      // <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      // <Card.Body>
      //   <Card.Title>{props.title}</Card.Title>
      //   <Card.Text style={{ textAlign: "justify" }}>
      //     {props.description}
      //   </Card.Text>
        

      //   {props.slug && (
      //     <Button
      //       as={Link}
      //       to={`/project/${props.slug}`}
      //       variant="primary"
      //       style={{ marginLeft: "10px" }}
      //     >
      //       <CgWebsite /> &nbsp; Blog
      //     </Button>
      //   )}
      // </Card.Body>
export default SubMenu;
