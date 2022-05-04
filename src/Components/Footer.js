import React from 'react'
import { Nav } from 'react-bootstrap'
import './footer.css';

export default function Footer() {
  return (
    <Nav className=' bg bg-dark p-4 '
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item className='mx-auto'>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item className='mx-auto'>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item className='mx-auto'>
    <Nav.Link  eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item className='mx-auto'>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
  )
}
