import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import './SectionComponent.css';

import mainLogo from'./logo.png';




const SectionComponent = () => (
    <div id="SectionComponent">
    <Navbar>
  <Navbar.Header>
    <Navbar.Brand className="header">
      <a href="#home"><img src={mainLogo} className="img"/></a>
      
    </Navbar.Brand>
    
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      OVERVIEW
    </NavItem>
    <NavItem eventKey={2} href="#">
      BENEFITS
    </NavItem>
    <NavItem eventKey={3} href="#">
      CONTACT US
    </NavItem>
  </Nav>
</Navbar>
  </div>
  );

export default SectionComponent;