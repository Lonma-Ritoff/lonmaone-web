import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

export default () => (
  <>
  <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:'#000000'}}>
  <Navbar.Brand href="#">Projet Carrera</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
  <div style={{ maxWidth: 'auto', margin: 'auto auto' }}>
    <Nav className="mr-auto" style={{textAlign: 'center', textTransform: 'uppercase', fontSize: '14px'}}>
      <Nav.Link href="/">Accueil</Nav.Link>
      <Nav.Link href="/ourproject">Le projet</Nav.Link>
      <Nav.Link href="/news">Blog</Nav.Link>
      <Nav.Link href="/about">A propos</Nav.Link>
      <Nav.Link href="#">Contacter</Nav.Link>
    </Nav>
    </div>
  </Navbar.Collapse>
</Navbar>

        </>
)
