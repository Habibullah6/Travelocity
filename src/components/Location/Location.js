import React from 'react';
import './Location.css';


const Location = () => {
    return (
        <div className='custom-location-container container mt-5'>
            <iframe className='custom-location-section' id="gmap_canvas" src="https://maps.google.com/maps?q=barking%20park&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">

            </iframe>

        </div>
    );
};

export default Location;