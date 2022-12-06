import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { ScaleLoader } from 'react-spinners';
import HotelsCard from '../HotelsCard/HotelsCard';
import './Hotels.css';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        
        setLoading(true)
        fetch('https://travelocity-server-production.up.railway.app/hotels')
        .then(res => res.json())
        .then(data => {
            setHotels(data)
            setLoading(false)
            
        })
    }, [])

    
    return (
        <div className='container mt-5'>
            <h2>Our most popular Hotel</h2>
            <p>Architectural wonder and  most famous <br /> hotels in the world.</p>

            {
            loading ? <div className='text-center'><ScaleLoader loading={loading} color={"#36d7b7"} size={50} /></div> : <Row xs={1} md={2} lg={3}>
            {
                hotels.map(hotel => <HotelsCard hotel={hotel} key={hotel._id}></HotelsCard>)
            }
        </Row>
            }
        </div>
    );
};

export default Hotels;