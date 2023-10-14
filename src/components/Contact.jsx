import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Contact = () => {

const [form, setForm] = useState({
  name:'',
  email:'',
  phone:'',
  message:'',
  required:false
})
const {name,email, phone, message,} = form;

    const handleChange = (e) => {
       const {value,name} = e.target;
       setForm({
        ...form,
        [name]:value
       })
    }
   
    const handleSubmit = (e) => {
      // para no recargar la pagina
      /*e.preventDefault()
      console.log(form)*/

      alert('mensaje enviado con exito!!  Pronto nos pondremos en contacto!! ');
      
      setForm({
        name:'',
        email:'',
        phone:'',
        message:'',
        required: true
      })
  }

  return (
    <section className=" animate__animated animate__fadeIn contact-section">
      <h2 className="contact-title">Contacto</h2>
      <Container>
      <Row className="d-flex justify-content-center align-items-center mt-5"> 
         <Col xs={12} md={6}>
      
      <Form  action="https://formsubmit.co/bd0fb0dd3a5c10ab5f8b09e359919cb8" method="POST" onSubmit={handleSubmit} className="container-form center-block" > {/**/}
        <Form.Group className="mb-3 " controlId="form-name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
           onChange={handleChange} 
           value={name} name='name' 
           required={true}
           style={{ width: "250px", margin: "auto", backgroundColor:"rgb(235, 245, 255)" }}
           type="text"
           placeholder="Nombre"

          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange} 
            value={email} name='email' 
            required={true}
            style={{ width: "250px", margin: "auto", backgroundColor:"rgb(235, 245, 255)" }}
            type="email"
            placeholder="name@mail.com"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-phone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
           onChange={handleChange} 
            value={phone} name='phone' 
            required={true}
            style={{ width: "250px", margin: "auto", backgroundColor:"rgb(235, 245, 255)" }}
            type="tel"
            placeholder="Celular"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
          onChange={handleChange} 
          value={message} name='message' 
          required={true}
          style={{ height: "200px", width: "250px", margin: "auto", backgroundColor:"rgb(235, 245, 255)" }}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button  type="submit" variant="primary">Enviar</Button>
        
      
        {/*false captcha submit */}
        <input type="hidden" name="_next" value="https://swaregrap-reactrouterv6.vercel.app/contact"></input>
        <input type="hidden" name="_captcha" value="false"></input>
      </Form>
      </Col>
      </Row>
      </Container>
    </section>

  );
};
export default Contact;
