import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import bg from '../images/bg.png'
import dg from '../images/dg.png'



export default function Bgimage() {
  return (
   <Container fluid>
      <Row>
        <Col style={{ padding: '0' }}>
          <div style={{ position: 'relative' }}>
            <Image src={bg} fluid />
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              textAlign: 'center',
              width: '100%'
            }}>
               
              
            </div>
            <div>
            <Image src={dg} fluid />
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              textAlign: 'center',
              width: '100%'
            }}></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  
  )
}
