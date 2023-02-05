
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Contact = () => {
  return(
  
 <Form className='container-form center-block' >

<Form.Group className="mb-3 " controlId="form-name">
<Form.Label>Name</Form.Label>
<Form.Control style={{ width: "150px", margin:"auto" }} type="text" placeholder="Enter your name" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Email address</Form.Label>
  <Form.Control style={{ width: "150px", margin:"auto" }}  type="email" placeholder="name@example.com" />
</Form.Group>
 
 <Form.Group  className="mb-3"controlId="form-phone">
  <Form.Label>Phone number</Form.Label>
  <Form.Control style={{ width: "150px", margin:"auto" }}   type="tel" placeholder="Enter your phone number" />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Example textarea</Form.Label>
  <Form.Control style={{ width: "190px", margin:"auto" }}  as="textarea" rows={3} />
</Form.Group>
<Button variant="primary">Enviar</Button>

</Form>


  )
}
export default Contact
