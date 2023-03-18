import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform login logic here, e.g. with fetch() or axios()
    // if login fails, set the error state with setError()
    // if login succeeds, navigate to the dashboard with navigate('/dashboard')
  };

  return (

    <Container className="d-flex justify-content-center align-items-center vh-100 w-50 h-50" style={{padding: '40px', border: '2px solid #ccc', borderradius: '10px', backgroundColor:"white"}}>
      <Form onSubmit={handleSubmit}>
        <h1 className="mb-4">Login</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <br></br>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>Dont have account ? <a onClick={()=>navigate('/register')}>Sign Up.</a></p>    
        
   
      </Form>
    </Container>

  );
}
