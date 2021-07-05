import React,{useState} from 'react';
import {Form,Button,Container,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn(){

    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
      <Container className='mt-3 offset-3'>
      <Col md={6}>
      <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" size='md' type="submit">
        Login
      </Button>
    </Form>
    </Col>
    </Container>
    )

}

export default SignIn;