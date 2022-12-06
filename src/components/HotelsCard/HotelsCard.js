import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { DynamicStar } from 'react-dynamic-star';
import { BsArrowRight } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import './HotelsCard.css';

const HotelsCard = ({ hotel }) => {
    const { name, img, location, ratings, cost, _id } = hotel;
    
    const star = {


        sharpness: 3,
        width: 15,
        height: 15,
        outlined: true,
        outlinedColor: "",
        fullStarColor: "#00c1a2",
        emptyStarColor: "transparent"
    }


    return (
        <Col>
            <Card className='mb-4 custom-hotels-card'>

                <img src={img} alt="" className='img-fluid' />
                <div className='p-3'>

                    <div className="d-flex justify-content-between">
                    <p> <RiHotelLine/> {name}</p>
                    <p> <MdLocationPin/> {location}</p>
                    </div>
                    
                    <div className='d-flex justify-content-between'>
                        <span>${cost} Par Night</span>
                       

                        <div className='d-flex justify-content-around'>
                        <DynamicStar rating={ratings} width={star.width} height={star.height} outlined={star.outlinedColor ? star.outlinedColor : star.outlined}
                        sharpnessStar={star.sharpness} fullStarColor={star.fullStarColor} emptyStarColor={star.emptyStarColor} />
                        <span className='ms-3'> {ratings}</span>

                        </div>

                        
                    </div>



                <NavLink to={`/booking/${_id}`} className='text-decoration-none'> <BsArrowRight/> Book Now</NavLink>
                </div>

            </Card>
        </Col>
    );
};

export default HotelsCard;