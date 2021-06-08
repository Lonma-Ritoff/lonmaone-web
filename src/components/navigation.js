import React from 'react'
import { Link } from 'gatsby'
import {nav_links} from './navigation.module.css'
import { Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

export default () => (
  <>
  <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:'#000000'}}>
  <Navbar.Brand href="/">Groupe Lonma-Ritoff</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
  <div style={{ maxWidth: 'auto', margin: 'auto 30%' }}>
    <Nav className="mr-auto" style={{textAlign: 'center', textTransform: 'uppercase', fontSize: '14px'}}>
      <Nav.Link href="/" className={nav_links}>Accueil</Nav.Link>
      <Nav.Link href="/ourproject" className={nav_links}>Le projet</Nav.Link>
      <Nav.Link href="/news" className={nav_links}>Actu</Nav.Link>
      <Nav.Link href="/about" className={nav_links}>A propos</Nav.Link>
      <Nav.Link href="/contact" className={nav_links}>Contacter</Nav.Link>
    </Nav>
    </div>
  </Navbar.Collapse>
</Navbar>
  </>
)
