import React from 'react';
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import '../../App.css';

const Service = (props) => {
  return (
   
    
    <Col md={4} className="mb-4">
    <Card className="h-100 shadow-sm bg-white rounded card-padding  card-shadow card-margin card-border">
      <Card.Img variant="top" src={props.img} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2  justify-content-center">
          <Card.Title className="mb-0 font-weight-bold text-center">{props.title}</Card.Title>
        </div>
        <Card.Text className="text-secondary">{props.text}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
       
         
  )
}

export default Service
