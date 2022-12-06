import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import swal from 'sweetalert';
const ManageBooking = () => {

  const [allBooking, setAllBooking] = useState([])
  useEffect(()=> {
    fetch('http://localhost:5000/bookingHotel')
    .then(res => res.json())
    .then(data => {
      setAllBooking(data)
    })
  }, [allBooking])

  const handleDeleteBooking = (id) => {
  const proceed = window.confirm("are you want to delete?")
  if(proceed){
    fetch(`http://localhost:5000/bookingHotel/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok){
        swal("deleted successfully")
      }
    })
  }
  
  }

  
  return (
    <Table  hover responsive className='text-center'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Booking Hotel</th>
          <th>Bill</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          allBooking.map(booking => <tr key={booking._id}>
            <td>{booking.displayName}</td>
            <td>{booking.email}</td>
            <td>{booking.hotelName}</td>
            <td>${booking.cost}</td>
            <td onClick={()=> handleDeleteBooking(booking._id)} style={{cursor: "pointer", fontSize: "25px", color: "red"}}> <AiFillDelete/> </td>
          </tr>)
        }
      </tbody>
    </Table>
  );
};

export default ManageBooking;