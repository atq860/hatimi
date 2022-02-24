import React from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";

const Dropdowns = () => {
  const submitHandler = () => {};

  return (
    <Form onSubmit={submitHandler} className="container my-5">
      <Row>
        <Col md={1}></Col>
        <Col md={3} sm={12} className="dropdown-space">
          <Form.Group controlId="rating">

            <Form.Select>
              <option value="">Select...</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Good</option>
              <option value="3">3 - Fair</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={3} sm={12} className="dropdown-space">
          <Form.Group controlId="">

            <Form.Select>
              <option value="">Select...</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Good</option>
              <option value="3">3 - Fair</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={3} sm={12}>
          <Form.Group controlId="" className="dropdown-space">

            <Form.Select>
              <option value="">Select...</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Good</option>
              <option value="3">3 - Fair</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={1} sm={12} className="dropdown-space" style={{ textAlign: "center" }}>
          <Button className="btn btn-wide" type="submit" variant="primary">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Dropdowns;
