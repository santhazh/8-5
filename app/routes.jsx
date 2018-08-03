import React from 'react';
import { Route } from 'react-router';

import Login from "./Components/Login/Login";
import SectionComponent from "./Components/SectionComponent/SectionComponent";
import FooterComponent from "./Components/FooterComponent/FooterComponent";
//import Corporation from "./Components/Corporation/Corporation";
import CorporationPage from "./Components/Corporation/CorporationPage";


export default 
[
   <Route path="/login" component={Login} />,
   <Route path="/SectionComponent" component={SectionComponent} />,
   <Route path="/FooterComponent" component={FooterComponent} />,
   <Route path="/CorporationPage" component={CorporationPage} />

]