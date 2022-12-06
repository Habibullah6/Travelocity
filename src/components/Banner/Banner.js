import React from 'react';
import { BsFillPlayFill } from "react-icons/bs";
import bannerImg from '../../images/bannerWoman.png';
import './Banner.css';
const Banner = () => {
    return (
        <div className='container custom-banner-container mt-5'>
            <div className="row align-items-center ">
                <div className="col-md-7 custom-banner-text-container">
                    <h2>Find Your Perfect Place To Stay</h2>
                    <p>Join Travelocity for exclusive savings, deal alerts and more. Book your travel today! Free Cancellation on Select Hotels. Because Flexibility Matters. Book Now! Book on 400+ Airlines. 3 Million Guest Reviews. Best Rates Or Refund. Instant Member Savings.</p>
                    <p> <BsFillPlayFill/> Watch video</p>
                </div>
                <div className='col-md-5  '>
                    <img src={bannerImg} alt="" className='w-100 img-fluid'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;