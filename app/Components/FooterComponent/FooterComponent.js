import React from 'react';

import { Link } from 'react-router-dom';

//import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import './FooterComponent.css';

//import mainLogo from'./logo.png';




const FooterComponent = () => (
    <div className="foot container-fluid">
    <div className= "footer container-fluid">
    <a className="footerlink" href="#">Frequently Asked Questions    &nbsp; &nbsp; &nbsp; |</a> 
    <a className="footerlink" href="#">Contact Customer Services   &nbsp; &nbsp; &nbsp; |</a>
    <a className="footerlink" href="#">Easy Returs</a>
    </div>
    <div className="last container-fluid">
    <a className="down footerlink" href="#">Privacy Policy &nbsp; &nbsp; &nbsp; |</a> 
    <a className="down footerlink" href="#">Site Under Terms & Conditions</a>
    </div>
    </div>
  );

export default FooterComponent;