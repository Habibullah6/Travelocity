import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Facilities from '../Facilities/Facilities';
import Hotels from '../Hotels/Hotels';
import Location from '../Location/Location';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
const Home = () => {
   
    return (
        <div>
         <Header/>
         <Banner/>
         <Hotels/>
         <Facilities/>
         <Contact/>
         <Location/>
         <Footer/>
        </div>
    );
};

export default Home;