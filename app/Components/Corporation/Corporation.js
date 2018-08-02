import React from 'react';

import { Link } from 'react-router-dom';

import { Form, Input } from 'formsy-react-components';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";

//import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
//import './FooterComponent.css';

//import mainLogo from'./logo.png';


class Corporation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
       
      };
  
   
      this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
      this.handleLastnameChange = this.handleLastnameChange.bind(this);
    
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleFirstnameChange(event) {
      this.setState({ firstName: event.target.value });
    }
  
    handleLastnameChange(event) {
      this.setState({ lastName: event.target.value });
    }
  
  
    handleSubmit(event) {
     const registrationData={firstName:this.state.firstName ,lastName: this.state.lastName};
      axios.post('/user', registrationData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
       });
      alert('A name was submitted: ' + JSON.stringify(registrationData));
  
        
      //to cancel form default behaviour
      event.preventDefault();
    }
  
    render() {
      return (
        <div className ="container-fluid">
        <form onSubmit={this.handleSubmit}>
          <label>
            Your Name:
            <input
             name="firstName" className="formstyle"type="text" value={this.state.firstName} onChange={this.handleFirstnameChange} />
          </label>
          <br/>
          <label>
            Business Name:
            <input
             name="lastName" className="formstyle"type="text" value={this.state.lastName} onChange={this.handleLastnameChange} />
          </label>
          <br/>
          <input type="submit" value="Next" onClick={this.handleSubmit} />
        </form>
        </div>
      );
    }
  }
  
  export default Corporation;