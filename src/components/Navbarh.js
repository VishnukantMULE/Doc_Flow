import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';




export default function Navbarh() {
  const navigate = useNavigate();
  const location = useLocation();


  return (  

    <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="#home">
         
            Doc_Flow  
          </Navbar.Brand>
          {location.pathname !== '/login'&&'/register' && <Button variant="outline-light" onClick={()=>navigate('/login')}>Login</Button>}

        </Container>
      </Navbar>
   
  )
}
