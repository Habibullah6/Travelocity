import React from 'react';
import { Card, Col } from 'react-bootstrap';
import swal from 'sweetalert';

const MyBookingCard = ({hotel}) => {
    const {hotelName, cost , location, _id} = hotel;
    
    const deleteBookingHotel = (id) => {
      
     const proceed = window.confirm("Are you sure ? Do you want to delete your fantastic booked hotel room ")


     if(proceed){
      fetch(`http://localhost:5000/bookingHotel/${id}`, {
        method: "DELETE"
      })
      .then(res => {
        if(res.ok) {
          swal("delete booking hotel successfully")
        }
      })
     }
    }



    return (
        <Col className='mb-4'>
        <Card className='shadow-lg' >
        <Card.Body>

         <p>Hotel: {hotelName}</p>
         <p>Bill: ${cost} par night</p>
         <p>Location: {location}</p>
         <button onClick={()=> deleteBookingHotel(_id)} className='btn btn-danger rounded-pill'>Delete booking</button>
        </Card.Body>
      </Card>
      </Col> 
    );
};

export default MyBookingCard;