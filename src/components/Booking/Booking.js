import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsBookmarks } from "react-icons/bs";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import "./Booking.css";


export default function Booking() {
    const navigate = useNavigate()

    const { register, handleSubmit, reset } = useForm();

    const { id } = useParams()

    const [hotel, setHotel] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/hotels/${id}`)
            .then(res => res.json())
            .then(data => {
                setHotel(data)
            })
    }, [])

    const { name, cost, location } = hotel;

    const onSubmit = data => {

        const { displayName, email, hotelName, cost, location } = data;

        const bookingInformation = {
            displayName: displayName,
            email: email,
            hotelName: hotelName,
            cost: cost,
            location: location
        }
        fetch("https://travelocity-server-production.up.railway.app/bookingHotel", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingInformation)
        }).then(res => {
            if (res.ok) {
                swal('hotel booking successfully')
                setTimeout(() => {
                    navigate('/myBooking');
                }, "3000")

            }
        });
        reset()

    };

    useEffect(() => {
        reset(hotel)
    }, [hotel]);


    return (

        <div className="text-center booking-form-container mt-5">
            <div className='custom-nav-title'>
                <NavLink to="/">TRAVELOCITY</NavLink>
            </div>
            <h5>Please submit the form for Hotel booking.</h5>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input  {...register("displayName")} placeholder="your name" />
                <input {...register("email")} placeholder="your email" />
                <input {...register("hotelName")} value={name || ''} />
                <input {...register("cost")} value={cost || ''} />
                <input {...register("location")} value={location || ''} />
                <button type="submit" className="custom-booking-btn rounded-pill text-light"> <BsBookmarks /> Booking </button>

            </form>
        </div>
    );
}