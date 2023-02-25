import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {

const [form, setForm] = useState({
  name:'',
  email:'',
  phone:'',
  message:''
})
const {name,email, phone, message} = form;

    const handleChange = (e) => {
       const {value,name} = e.target;
       setForm({
        ...form,
        [name]:value
       })
    }
    const handleSubmit = (e) => {
      // para no recargar la pagina
      e.preventDefault()
      console.log(form)
      
      setForm({
        name:'',
        email:'',
        phone:'',
        message:''
      })
  }

  return (
    <section className="contact-section">

      <Form onSubmit={handleSubmit} className="container-form center-block">
        <Form.Group className="mb-3 " controlId="form-name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
           onChange={handleChange} 
           value={name} name='name' 
            style={{ width: "150px", margin: "auto" }}
            type="text"
            placeholder="Nombre"

          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange} 
            value={email} name='email' 
            style={{ width: "150px", margin: "auto" }}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-phone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
           onChange={handleChange} 
            value={phone} name='phone' 
            style={{ width: "150px", margin: "auto" }}
            type="tel"
            placeholder="Celular"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
          onChange={handleChange} 
          value={message} name='message' 
            style={{ width: "190px", margin: "auto", height:"90px" }}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button type="submit" variant="primary">Enviar</Button>
      </Form>
    </section>
  );
};
export default Contact;
