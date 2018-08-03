import React from 'react';

import { Link } from 'react-router-dom';

import { Form, Input } from 'formsy-react-components';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";
import './Corporation.css';

//import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
//import './FooterComponent.css';

//import mainLogo from'./logo.png';

import { Field, reduxForm } from 'redux-form';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input}  type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const Corporation = props => {
  const { handleSubmit, pristine, reset, submitting , submitCase} = props;

  const handleSubmitForm = (values) => {
    submitCase(values);
  };



  return (
    <form  className="yourname" onSubmit={handleSubmit(handleSubmitForm)}>
      <Field className ="names"
        name="yourName"
        type="text"
        component={renderField}
        label="Your Name"
        validate={[required, maxLength15, minLength2]}
      />
       <Field
        name="businessName"
        type="text"
        component={renderField}
        label="Business Name"
        validate={[required, maxLength15, minLength2]}
      />
      <div><p>Please upload any supporting documents that validate your business infrmation.
Please note verifivation of these documents can take up to 24 hours.</p></div>
<div><p>
Supported documents include: Resale certificate, Business License, Professional license or permit, State tax exemption, Membership document</p></div>
      <div className="next">
        
        <button  type="submit" disabled={submitting}>
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(Corporation)