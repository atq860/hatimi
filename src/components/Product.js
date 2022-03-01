import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const Product = ({ users }) => {
  return (
    <div className="py-5 container-fluid">
      <Row style={{ marginLeft: "1.2rem" }}>
        <Col md={2} className="res-view">
          <img
            style={{ height: "600px", width: "160px" }}
            src="/images/ads.jpg"
            className="fixed-content ml-5 res-view"
            alt="ads"
            id="mydiv"
          ></img>
        </Col>
        <Col md={8} sm={12} xs={12}>
          <Row>
            <Col md={4} className="col-align">
              <Card style={{ width: "18rem" }} className="mb-5 card-align">
                <Card.Img variant="top" src="/images/image1.jpeg" />
                <Card.Body>
                  <Card.Title className="mb-2">John Doe</Card.Title>
                  <Card.Subtitle className="mb-2">London</Card.Subtitle>
                  <Card.Text>Artist</Card.Text>
                  <Card.Text className="text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </Card.Text>

                  <Button variant="primary">View Profile</Button>
                  <Button variant="primary ml-3">Contact</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="col-align">
              <Card style={{ width: "18rem" }} className="mb-5 card-align">
                <Card.Img variant="top" src="/images/image1.jpeg" />
                <Card.Body>
                  <Card.Title className="mb-2">John Doe</Card.Title>
                  <Card.Subtitle className="mb-2">London</Card.Subtitle>
                  <Card.Text>Artist</Card.Text>
                  <Card.Text className="text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </Card.Text>

                  <Button variant="primary">View Profile</Button>
                  <Button variant="primary ml-3">Contact</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="col-align">
              <Card style={{ width: "18rem" }} className="mb-5 card-align">
                <Card.Img variant="top" src="/images/image1.jpeg" />
                <Card.Body>
                  <Card.Title className="mb-2">John Doe</Card.Title>
                  <Card.Subtitle className="mb-2">London</Card.Subtitle>
                  <Card.Text>Artist</Card.Text>
                  <Card.Text className="text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </Card.Text>

                  <Button variant="primary">View Profile</Button>
                  <Button variant="primary ml-3">Contact</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="col-align">
              <Card style={{ width: "18rem" }} className="mb-5 card-align">
                <Card.Img variant="top" src="/images/image1.jpeg" />
                <Card.Body>
                  <Card.Title className="mb-2">John Doe</Card.Title>
                  <Card.Subtitle className="mb-2">London</Card.Subtitle>
                  <Card.Text>Artist</Card.Text>
                  <Card.Text className="text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </Card.Text>

                  <Button variant="primary">View Profile</Button>
                  <Button variant="primary ml-3">Contact</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col md={2} className="res-view">
          <img
            style={{ height: "600px", width: "160px" }}
            id="mydiv2"
            src="/images/ads.jpg"
            className="fixed-content res-view"
            alt="user"
          ></img>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
