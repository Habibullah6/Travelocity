import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user} = useAuth()
    
    
   

    if(!user.email){
        return <Navigate to='/login' replace state={{from: location}}/>
    }
    return   children 
};

export default PrivateRoute;