import React from 'react'
import Card from "react-bootstrap/Card";
import '../../App.css'

const Service = (props) => {
  return (
   
    
      
        <Card>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title className='color-title'>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>
        </Card>
       
         
  )
}

export default Service
