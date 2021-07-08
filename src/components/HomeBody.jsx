import React from 'react';
import "../static/css/HomeBody.css";
import GPACropped1 from "../static/images/green_park_automotive1_cropped1.jpg";
import HomeBodyCard1 from './HomeBodyCard1';

function HomeBody({ ...props }) {
    return (
        <div 
            className="homeBody"
        >
            <HomeBodyCard1 
                image={GPACropped1}
            />
            
            <HomeBodyCard1 
                image={GPACropped1}
            />
            <HomeBodyCard1 
                image={GPACropped1}
            />
            <HomeBodyCard1 
                image={GPACropped1}
            />

        </div>
    )
}

export default HomeBody
