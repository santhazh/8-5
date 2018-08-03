import React, { Component } from 'react';
import * as userAction from "./userAction";
import { render } from 'react-dom';
import { BrowserRouter,Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Corporation.css';
import Corporation from './Corporation';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


class CorporationPage extends Component {
    constructor() {
        super();
    };

    onSubmit = (data) => {
      console.info('data', data);
    }

    render() {
        console.log(this.props);
        return (
            <div  className="container">
                <div className="Quickpagewrap">
                 <React.Fragment>
                        <Corporation 
                         submitCase={this.onSubmit}
                         />
                    </React.Fragment>
                    
                    
                </div>
            </div>
        )
    };

}

const mapStateToProps = state =>{
return state;

}

const matchDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign(
        userAction,
    ), dispatch),
  });

export default connect(mapStateToProps,matchDispatchToProps) (CorporationPage);