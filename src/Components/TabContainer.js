import React from 'react'
import { Tab, Nav, Col, Row, Card, Container} from 'react-bootstrap';
import HTML from '../img/html.png';
import CSS from '../img/css.png';
import JS from '../img/js.png';
import REACT from '../img/react.png';
import PHP from '../img/php.png';
import './TabContainer.css';

export default function TabContainer() {
  return (
    <div className='tab-container'>
          <Tab.Container className="mt-3 " id="left-tabs-example" defaultActiveKey="first">
       <h1 className='text-center text-white mt-2'>Roman Burlaka - Web<span  className='text-primary'> Developer</span></h1>
  <Row className="mt-3 p-3">
 
    <Col sm={3} >
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first" >HTML</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">CSS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">JS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="four">React JS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="five">PHP</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content >
        <Tab.Pane eventKey="first">
        <Card.Img 
        className='fluid w-75' variant="top" src={HTML} alt="html"/>
        
        </Tab.Pane>

        <Tab.Pane eventKey="second">
       
        <Card.Img className='fluid w-75 ' variant="top" src={CSS} variant="top" src={CSS} alt="css"/>
        
        </Tab.Pane>

        <Tab.Pane eventKey="third">
       
       <Card.Img className='fluid w-50 ' variant="top" src={JS} alt="js"/>
       
       </Tab.Pane>

       <Tab.Pane eventKey="four">
       
       <Card.Img className='fluid w-75' variant="top" src={REACT} alt="react"/>
       
       </Tab.Pane>

       <Tab.Pane eventKey="five">
       
       <Card.Img className='fluid w-75' variant="top" src={PHP} alt="php"/>
       
       </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
    </Tab.Container>

    </div>
    
  )
}
