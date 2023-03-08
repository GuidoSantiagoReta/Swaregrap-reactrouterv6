import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
    {/* */}
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
    <section className="contact-section">
      <h2 className="contact-title">Contacto</h2>
      <Form  action="https://formsubmit.co/bd0fb0dd3a5c10ab5f8b09e359919cb8" method="POST" onSubmit={handleSubmit}   className="container-form center-block" > {/**/}
        <Form.Group className="mb-3 " controlId="form-name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
           onChange={handleChange} 
           value={name} name='name' 
           required={true}
           style={{ width: "150px", margin: "auto", backgroundColor:"rgb(143, 200, 253)" }}
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
            style={{ width: "150px", margin: "auto", backgroundColor:"rgb(143, 200, 253)"  }}
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
            style={{ width: "150px", margin: "auto" , backgroundColor:"rgb(143, 200, 253)" }}
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
            style={{ width: "190px", margin: "auto", height:"90px" , backgroundColor:"rgb(143, 200, 253)"  }}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button  type="submit" variant="primary">Enviar</Button>
        
      
        {/*false captcha submit */}
        <input type="hidden" name="_next" value="https://swaregrap-reactrouterv6.vercel.app/contact"></input>
        <input type="hidden" name="_captcha" value="false"></input>
      </Form>
    </section>
  );
};
export default Contact;
