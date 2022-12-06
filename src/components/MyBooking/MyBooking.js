import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import useAuth from "../../hooks/useAuth";
import MyBookingCard from '../MyBookingCard/MyBookingCard';
const MyBooking = () => {
    const { user } = useAuth()
    const [bookingHotel, setBookingHotel] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/bookingHotel/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookingHotel(data)

            })
    }, [bookingHotel])


    return (
        <div className='container mt-5 '>

            <div className='custom-nav-title text-center'>
                <NavLink to='/'>TRAVELOCITY</NavLink>
            </div>

            <Row xs={1} md={2} lg={3} className='mt-3'>
                {
                    bookingHotel.map(hotel => <MyBookingCard key={hotel._id} hotel={hotel}> </MyBookingCard>)
                }
            </Row>












        </div>
    );
};

export default MyBooking;