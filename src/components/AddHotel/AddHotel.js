import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import "./AddHotel.css";


const AddHotel = () => {
    const { register, handleSubmit, reset } = useForm();

    const handleAddHotel = data => {
        fetch("https://travelocity-server-production.up.railway.app/hotels", {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(data)
          }).then(res => {
            console.log(res);
            if(res.ok){
                swal("hotel added successfully.")
            }
          });
    
    reset()
    };

    
    return (
        <div className='add-hotel-container '>
            <form onSubmit={handleSubmit(handleAddHotel)}>
                <input  {...register("name")} placeholder="Hotel name"/>
                <input {...register("cost")} placeholder="cost"/>
                <input {...register("ratings")} placeholder="ratings"/>
                <input {...register("location")} placeholder="location"/>
                <input {...register("img")} placeholder="img_url"/>
                <input type="submit" value="Add hotel"/>
            </form>
        </div>
    );
};

export default AddHotel;