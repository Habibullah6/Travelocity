import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, isLoading} = useAuth()
    if(isLoading){
        return  <div className='mt-3 text-center'><Spinner  animation="border" variant="primary" /></div>
    }
    
   

    if(!user.email){
        return <Navigate to='/login' replace state={{from: location}}/>
    }
    else{
        return   children 
    }
   
};

export default PrivateRoute;