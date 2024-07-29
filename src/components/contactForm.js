import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phone });
    setName("");
    setPhone("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="my-5">
        <Col lg={6} sx={6}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <b>Name</b>
            </Form.Label>
            <Form.Control 
              type="text" 
              placeholder="John Doe" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </Form.Group>
        </Col>
        <Col lg={6} sx={6}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <b>Phone Number</b>
            </Form.Label>
            <Form.Control 
              type="text" 
              placeholder="0320293399" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </Form.Group>
        </Col>
        <Button type="submit" className="btn-block">Save</Button>
      </Row>
    </Form>
  );
}

export default ContactForm;
