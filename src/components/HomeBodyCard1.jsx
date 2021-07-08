import React from 'react';
import "../static/css/HomeBodyCard1.css";
import GoogleMapsSS1 from "../static/images/google_maps_ss1_cropped1.png";

function HomeBodyCard1({ image }) {
    return (
        <div className="homeBodyCard1">
            
            <div className="homeBodyCard1__left">
                <img src={image} alt="test" />
            </div>
            <div className="homeBodyCard1__right">

                <div className="homeBodyCard1__rightHeader">
                    <div className="homeBodyCard1__rightHeader__top">
                        <p>Welcome to</p>
                    </div>
                    <div className="homeBodyCard1__rightHeader__bottom">
                        <p>Green Park Automotive</p>
                    </div>
                </div>
                <div className="homeBodyCard1__rightBody">
                    <div className="homeBodyCard1__rightBody__header">
                        <p>_MISSION_STATEMENT_ Home of the full service gas station and all your automotive maintenance needs! _MISSION_STATEMENT_</p>
                    </div>
                    <a 
                        href="https://goo.gl/maps/cPKxEsEDqJVZiUDb7" 
                        className="homeBodyCard1__rightBody__img"
                        target="_blank"
                    >
                        <img src={GoogleMapsSS1} alt="google_maps_ss1" />
                    </a>
                </div>
                <div className="homeBodyCard1__rightFooter">
                    <a
                        href="https://goo.gl/maps/cPKxEsEDqJVZiUDb7"
                        className="homeBodyCard1__rightFooter__button"
                        target="_blank"
                    >
                        Get Directions
                    </a>
                </div>


            </div>
            
            
        </div>
    )
}

export default HomeBodyCard1
