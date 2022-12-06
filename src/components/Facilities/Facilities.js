import React from 'react';

import { BsThreeDots } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { FaLaptopCode, FaParking, FaSwimmingPool, FaWifi } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import './Facilities.css';
const Facilities = () => {
    return (
        <div className='container mt-5' id='facilities'>
            <div className="row align-items-center">
                <div className="col-md-4 lh-lg">
                    <h2>We do our best <br/> facilities provide you</h2>
                    <p>
                    Free Wi-Fi, gym, spa, private swimming pool in front of each room, safe car parking, fully equipped business centre, shuttle and cab service.
                    </p>

                    <button className='custom-nav-button rounded-pill py-2'>Contact now</button>
                </div>

                <div className="col-md-8 mt-3">
                    
                        <div className="row mb-3 g-3">
                        
                       <div className="col-12 col-md-3">
                       <div className='custom-facility-card '>
                       <span className='fs-2'><FaLaptopCode/></span>
                       <p>Private workspace</p>
                       </div>
                       </div>
                       <div className="col-12 col-md-3">
                       <div className='custom-facility-card'>
                       <span className='fs-2'><FaParking/></span>
                       <p>Parking area</p>
                       </div>
                       </div>
                       <div className="col-12 col-md-3">
                       <div className='custom-facility-card'>
                       <span className='fs-2'><FaWifi/></span>
                       <p>Free wifi</p>
                       </div>
                       </div>
                       <div className="col-12 col-md-3">
                       <div className='custom-facility-card'>
                       <span className='fs-2'><FaSwimmingPool/></span>
                       <p>Swimming pool</p>
                       </div>
                       </div>
                        </div>
                         
                         <div className="row g-3">
                         <div className="col-12 col-md-3">
                       <div className='custom-facility-card'>
                       <span className='fs-2'><MdFreeBreakfast/></span>
                       <p>Free Breakfast</p>
                       </div>
                       </div>
                       <div className="col-12 col-md-3">
                       <div className='custom-facility-card'>
                       <span className='fs-2'><GiElectric/></span>
                       <p>Free electricity</p>
                       </div>
                       </div>
                       <div className="col-12 col-md-3">
                       <div className='custom-facility-card'>
                       <span className='fs-2'> <CgGym/> </span>
                       <p>Free GYM</p>
                       </div>
                       </div>
                       <div className="col-12 col-md-3">
                       <div className='custom-facility-card'>
                       <span className='fs-2'><BsThreeDots/></span>
                       <p>Others facilities</p>
                       </div>
                       </div>
                         </div>
                        
                     
                        
                    
                </div>
            </div>
        </div>
    );
};

export default Facilities;