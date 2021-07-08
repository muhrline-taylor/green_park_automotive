import React, { useEffect, useState } from 'react';
import "../static/css/LandingHeader.css";
import Logo1_Raw from "../static/images/logo1_raw.jpg";
import Nextdoor_logo from "../static/images/nextdoor_favorite_transparent1 - Copy.png";

function LandingHeader() {
    
    


    

    return (
        <div className="landingHeader">
            <div className="landingHeader__logo">
                <img src={Logo1_Raw} alt="logo" />
            </div>
            <div className="landingHeaderR">
                <div className="landingHeaderR__top">
                    <h1 style={{
                        paddingLeft: "8%"
                    }}>2730 Union Rd St. Louis, MO, 63125</h1>
                    <h1 style={{
                        paddingRight: "15%"
                    }}>(314) 892-6262</h1>
                </div>
                <nav className="landingHeaderR__bottom">
                    <a
                        className="landingHeaderR__bottomButton"
                        href="/"
                    >
                        <p>Home</p>
                    </a>
                    <a 
                        className="landingHeaderR__bottomButton"
                        href="/services"
                    >
                        <p>Services</p>
                    </a>
                    <a 
                        className="landingHeaderR__bottomButton"
                        href="/aboutUs"
                    >
                        <p>About Us</p>
                    </a>
                    <a 
                        className="landingHeaderR__bottomButton"
                        href="/contact"
                    >
                        <p>Contact</p>
                    </a>
                    <a 
                        className="landingHeaderR__bottomButtonLarge"
                        href="/appointments"
                    >
                        <p>Schedule an Appointment</p>
                    </a>
                </nav>
            </div>
            <div className="landingHeader__badge">
                <img src={Nextdoor_logo} alt="nextdoor_logo"/>
            </div>
        </div>
    )
}

export default LandingHeader
