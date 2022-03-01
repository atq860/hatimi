import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const About = ({ users }) => {
  return (
    <Row
      xs={1}
      md={2}
      className="g-4 py-4"
      style={{ marginLeft: "3px", marginRight: "3px" }}
    >
      {/* {Array.from({ length: 2 }).map((_, idx) => ( */}
      <Col md={4}>
        <Card>
          <Card.Img
            variant="top"
            src="/images/model.jpg"
            className="aboutImg"
          />
          <Card.Body className="d-flex justify-content-center">
            <button
              className="aboutContact"
            //   style={{
            //     backgroundColor: "#1dbf73",
            //     border: "#1dbf73",
            //   }}
            >
              Contact
            </button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={8}>
        <Card>
          {/* <Card.Img variant="top" src="/images/image1.jpeg" /> */}
          <Card.Body>
            <Card.Title className="about">About Me</Card.Title>
            <Card.Text className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>

            <Card.Text>
                <b className="aboutText">Name: </b> John Doe
            </Card.Text>
            <Card.Text>
                <b className="aboutText">Professure de: </b> Primaire
            </Card.Text>
            <Card.Text>
                <b className="aboutText">Level: </b> Mathematique
            </Card.Text>
            <Card.Text>
                <b className="aboutText">Experience: </b> 10 Years
            </Card.Text>
            <Card.Text>
                <b className="aboutText">Ville: </b> Casablanca
            </Card.Text>
            <Card.Text>
                <b className="aboutText">Email: </b> john@exmaple.com
            </Card.Text>
            <Card.Text>
                <b className="aboutText">Phone: </b> +212 1234567890
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      {/* ))} */}
    </Row>
    // <div className="py-5 container-fluid">
    //   <Row>
    //     <Col md={4}>
    //       <Card style={{ width: "30rem" }} className="mb-5 card-align">
    //         <Card.Img variant="top" src="/images/image1.jpeg" />
    //         <Card.Body>
    //           <Card.Title className="mb-2">John Doe</Card.Title>
    //           <Card.Subtitle className="mb-2">London</Card.Subtitle>
    //           <Card.Text>Artist</Card.Text>
    //           <Card.Text className="text">
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    //             in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    //             nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    //             sunt in culpa qui officia deserunt mollit anim id est laborum."
    //           </Card.Text>

    //           <Button variant="primary">View Profile</Button>
    //           <Button variant="primary ml-3">Contact</Button>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     <Col md={8}>
    //       <Card style={{ width: "58rem" }} className="mb-5 card-align">
    //         <Card.Img variant="top" src="/images/image1.jpeg" />
    //         <Card.Body>
    //           <Card.Title className="mb-2">John Doe</Card.Title>
    //           <Card.Subtitle className="mb-2">London</Card.Subtitle>
    //           <Card.Text>Artist</Card.Text>
    //           <Card.Text className="text">
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    //             in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    //             nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    //             sunt in culpa qui officia deserunt mollit anim id est laborum."
    //           </Card.Text>

    //           <Button variant="primary">View Profile</Button>
    //           <Button variant="primary ml-3">Contact</Button>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </div>
  );
};

export default About;
