import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <section className="contact-section">
      <Form className="container-form center-block">
        <Form.Group className="mb-3 " controlId="form-name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            style={{ width: "150px", margin: "auto" }}
            type="text"
            placeholder="Nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            style={{ width: "150px", margin: "auto" }}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-phone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            style={{ width: "150px", margin: "auto" }}
            type="tel"
            placeholder="Celular"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            style={{ width: "190px", margin: "auto", height:"90px" }}
            as="textarea"
            rows={3}ss
          />
        </Form.Group>
        <Button variant="primary">Enviar</Button>
      </Form>
    </section>
  );
};
export default Contact;
