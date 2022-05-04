import React from 'react'
import {Card, Button, Container} from 'react-bootstrap'
import './Card.css'
import Danilio from '../img/danilio.jpg';
import Pax from '../img/pax.jpg';
import Markus from '../img/markus.jpg';

export  const Cards = () => {
  return (
    <div className='card-container'>
         <div className='row  '>
       <h3 className='text-center text-white mb-4 p-4 '>About my Team </h3>
        <div className='col-lg-4 '>
            <Container>
            <Card style={{ width: '18rem', margin: '0 auto' }}>
                <Card.Img variant="top" src={Danilio} />
                <Card.Body>
                  <Card.Title> Web Disigners</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">See more</Button>
                </Card.Body>
              </Card>
            </Container>
        </div>

        <div className='col-lg-4  mb-5'>
            <Container>
            <Card style={{ width: '18rem', margin: '0 auto' }}>
                <Card.Img variant="top" src={Pax} />
                <Card.Body>
                  <Card.Title>Fronted Developers</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">See more</Button>
                </Card.Body>
              </Card>
            </Container>
        </div>


        <div className='col-lg-4  mb-5'>
            <Container>
                    <Card style={{ width: '18rem', margin: '0 auto' }}>
                <Card.Img variant="top" src={Markus} />
                <Card.Body>
                  <Card.Title>Manual Testers</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">See more</Button>
                </Card.Body>
              </Card>
            </Container>
        </div>

    </div>


    </div>
   
 
  )
}

 