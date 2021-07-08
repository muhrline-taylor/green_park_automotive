import React, { useEffect } from 'react';
import './static/css/App.css';
import LandingHeader from './components/LandingHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DefaultFooter from "./components/DefaultFooter";
import HomeBody from './components/HomeBody';
import ServicesBody from './components/ServicesBody';
import AboutUsBody from "./components/AboutUsBody";
import ContactBody from "./components/ContactBody";

function App() {
  

  
  


    return (
      <div className="app">
        
        <div className="appHeader">
          <LandingHeader />
        </div>
  
        
        <div className="appBody">
          {/* BODY */}
          <Router>
            
            <Route exact path="/" component={HomeBody}></Route>
            <Route path="/services" component={ServicesBody}></Route>
            <Route path="/aboutUs"component={AboutUsBody}></Route>
            <Route path="/contact"component={ContactBody}></Route>
            <Route path="/appointments"><h1>Schedule an Appointment Page</h1></Route>
          </Router>
        </div>  
  
        
        <div className="appFooter">
          {/* FOOTER */}
          <DefaultFooter />
        </div>
      </div>
    );
  }
  
  export default App;
