import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Footerh() {
  return (
   <footer className="bg-dark py-3">
   <Container>
     <Row>
       <Col>
         <p className="text-muted">© {new Date().getFullYear()} Doc_Flow</p>
       </Col>
       <Col>
         <h5>Explore</h5>
         <ul className="list-unstyled">
           <li><a href="#">About Us</a></li>
           <li><a href="#">Our Team</a></li>
           <li><a href="#">Contact Us</a></li>
         </ul>
       </Col>
       <Col>
         <h5>Connect</h5>
         <ul className="list-unstyled">
           <li><a href="#">Twitter</a></li>
           <li><a href="#">Facebook</a></li>
           <li><a href="#">Instagram</a></li>
         </ul>
       </Col>
       <Col>
         <h5>Subscribe</h5>
         <p>Get the latest updates straight to your inbox.</p>
         <form>
           <div className="form-group">
            
             <button type="submit" className="btn btn-primary mt-3">Dock_Flow</button>
           </div>
         </form>
       </Col>
     </Row>
   </Container>
 </footer>
  )
}
