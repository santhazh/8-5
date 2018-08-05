import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import Login from './Components/Login/Login';
import SectionComponent from './Components/SectionComponent/SectionComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';
//import Corporation from './Components/Corporation/Corporation';
import CorporationPage from './Components/Corporation/CorporationPage';
import allReducers from './reducers';
import logger from 'redux-logger';

const store = createStore(
    allReducers,
    applyMiddleware(logger),
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
<Provider store={store}>
<div>
    <SectionComponent />
   <CorporationPage />
    <FooterComponent/>
    </div>
    


</Provider>, document.getElementById('root'));
