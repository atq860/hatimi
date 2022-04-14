import { useState } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("here");
  };
  return (
    <Row
      xs={1}
      md={2}
      className="g-4 py-4 profileBox"
      style={{fontFamily: "Arial" }}
    >
      <Col md={3}>
        <Card style={{ height: "60vh", border: "0", borderRadius: "6px"}} className="card-border">
          <Card.Title
            className="pt-5"
            style={{ textAlign: "center", fontWeight: "700", fontSize: "27px" }}
          >
            John Doe
          </Card.Title>
          <Card.Subtitle
            className="pt-2 pb-5"
            style={{ textAlign: "center", fontWeight: "600" }}
          >
            @john
          </Card.Subtitle>

          <Card.Img
            variant="top"
            src="/images/model5.jpg"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              objectFit: "cover",
              //   marginRight: "20px",
              // display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          {/* <div className="profilePicContainer">
            <div className="profileDeleteBadge">
              <i className="fas fa-trash"></i>
            </div>
          </div> */}

          <Card.Body style={{ textAlign: "center" }}>
            {/* <button className="uploadProfile" style={{ borderRadius: "3px" }}>
              Upload New Photo
            </button> */}

            <Card.Text className="mt-3" style={{ fontFamily: "Calibri" }}>
              Member Since: <b>29 September 2019</b>
              {/* <FontAwesomeIcon icon="fa-solid fa-circle-trash" /> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={9}>
        <Card
          style={{
            borderRadius:
              "0" /* borderBottom: "3px solid rgba(245,245,245,1)" */,
          }}
        >
          <Card.Body style={{ padding: "0", margin: "0" }}>
            <Card.Header
              style={{
                fontFamily: "Calibri",
                height: "15vh",
                // borderBottom: "0",
                borderBottom: "3px solid rgba(245,245,245,1)",
              }}
            >
              <h1
                style={{
                  fontWeight: "700",
                  paddingLeft: "5.8rem",
                  paddingTop: "20px",
                }}
                className="profile"
              >
                Edit Profile
              </h1>
            </Card.Header>

            {/* <FormContainer> */}
            <Form
              onSubmit={submitHandler}
              style={{ padding: "4rem 3rem 4rem 7rem", fontFamily: "Calibri" }}
            >
              <Row>
                <Col md={6}>
                  <Form.Group controlId="name" className="mr-5">
                    <Form.Label style={{ color: "grey" }}>Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Type your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="email" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Type your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="profession" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>
                      Profession
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    >
                      <option value="">Select...</option>
                      <option value="maths">Professor</option>
                      <option value="physics">Student</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="gender" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    >
                      <option value="">Select...</option>
                      <option value="maths">Male</option>
                      <option value="physics">Female</option>
                      <option value="physics">Other</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="password" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="*************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  {/* <Form.Group controlId="name" className="mr-5">
                    <Form.Label style={{ color: "grey" }}>Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Type your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    ></Form.Control>
                  </Form.Group> */}

                  <Form.Group controlId="image" className="mr-5">
                    <Form.Label style={{ color: "grey" }}>Image</Form.Label>
                    {/* <Form.Control
                      type="text"
                      placeholder="Enter Image URL"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    ></Form.Control> */}

                    <Form.Control
                      type="file"
                      label="Choose File"
                      custom="true"
                      onChange={(e) => setImage(e.target.files[0])}
                      style={{ height: "3rem", fontWeight: "700", lineHeight: "2.1" }}
                    />
                  </Form.Group>

                  <Form.Group controlId="email" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Type your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="profession" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>
                      Profession
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    >
                      <option value="">Select...</option>
                      <option value="maths">Professor</option>
                      <option value="physics">Student</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="gender" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    >
                      <option value="">Select...</option>
                      <option value="maths">Male</option>
                      <option value="physics">Female</option>
                      <option value="physics">Other</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="password" className="mt-4 mr-5">
                    <Form.Label style={{ color: "grey" }}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="*************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ height: "3rem", fontWeight: "700" }}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <button
                className="uploadProfile mt-5"
                style={{ borderRadius: "3px" }}
                type="submit"
              >
                Update info
              </button>
              {/* 
              <Button
                type="submit"
                variant="primary"
                className="mt-3"
                style={{
                  backgroundColor: "rgba(0, 0, 255, 0.8)",
                  boxShadow: "rgba(0, 0, 0, 0.40) 0px 5px 20px",
                }}
              >
                Register
              </Button> */}
            </Form>
            {/* </FormContainer> */}
          </Card.Body>
        </Card>
      </Col>
      {/* ))} */}
    </Row>
  );
}

export default ProfileScreen;
