import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AddHotel from '../AddHotel/AddHotel';
import ManageBooking from '../ManageBooking/ManageBooking';
import "./Admin.css";
const Admin = () => {
    const [modal, setModal] = useState(true)

    const handleModal = (event) => {
    if(event === "manageBooking"){
        setModal(true)
    }
    if(event === "addHotel"){
        setModal(false)
    }
    }


    return (
      
        <div className='container mt-5'>
            <div className='custom-nav-title text-center'>
                        <NavLink to="/">TRAVELOCITY</NavLink>
                    </div>
           <div className="row shadow-lg rounded p-2 mt-5">
            <div className="col-md-4 custom-admin-tabs">
               <button onClick={()=> handleModal("manageBooking")} className='custom-tab-btn mb-3 rounded-pill'>Manage booking</button>
               <button onClick={() => handleModal("addHotel")} className='custom-tab-btn rounded-pill'>Add hotel</button>
            </div>

            <div className='col-md-8'>
            {
            modal ? <ManageBooking/> : <AddHotel/>
            }
            </div>
           </div>
        </div>
      
    );
};

export default Admin;