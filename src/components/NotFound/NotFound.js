import React from 'react';
import notFound from '../../images/not_found.gif';
const NotFound = () => {
    return (
        <div className='m-auto w-50'>
            <img src={notFound} alt="" className='img-fluid w-100'/>
        </div>
    );
};

export default NotFound;