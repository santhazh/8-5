import React from 'react';

import { Link } from 'react-router-dom';

//import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import './FooterComponent.css';

//import mainLogo from'./logo.png';




const FooterComponent = () => (
  <footer className="container-fluid main">
  <div className= "footer1 container-fluid">
  <div><a className="footerlink col-sm-4" href="#">Frequently Asked Questions    &nbsp; &nbsp; &nbsp; |</a> </div>
  <div><a className="footerlink col-sm-4" href="#">Contact Customer Services   &nbsp; &nbsp; &nbsp; |</a></div>
  <div><a className="footerlink col-sm-4" href="#">Easy Returs</a></div>
  </div>
  <div className= "footer2 container-fluid">
  <div><a className="down footerlink col-sm-4" href="#">Privacy Policy &nbsp; &nbsp; &nbsp; |</a> </div>
  <div><a className="down footerlink col-sm-4" href="#">Site Under Terms & Conditions</a></div>
 
  </div>
  </footer>
  );

export default FooterComponent;