import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SiGooglemessages } from 'react-icons/si';
import { FaDiscord, FaTwitter } from 'react-icons/fa';



const Header = () => {



  return (

    <Navbar className='w-100 px-5 py-0' collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <img className='logo' src='/images/logo.webp' />
        <h6>Pic Filter</h6>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ml-auto'>
          <Nav.Link href="#deets">API</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            How to
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Examples
          </Nav.Link>
          <Nav.Link eventKey={2} href="/login">
            Login
          </Nav.Link>
          <div className='ml-0 ml-md-4 mt-2'>
            <SiGooglemessages className="icons"/>
            <FaTwitter className="icons"/>
            <FaDiscord className="icons"/>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
