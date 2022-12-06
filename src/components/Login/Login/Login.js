import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { ImGoogle3 } from "react-icons/im";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { handleGoogleLogIn , handleFacebookLogIn, setUser} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const redirectUri = location.state?.from || '/';

    const signInWithGoogle = () => {
      
      handleGoogleLogIn()
      .then(result => {
        setUser(result.user)
        navigate(redirectUri)
        
      })
    }
   
    const signInWithFacebook = () => {
      
    handleFacebookLogIn()
    .then(result => {
      setUser(result.user)
      
    })
    .catch(error => {
      swal(error.message)
    })
    }



    return (
        <div className='text-center'>
          <div className='custom-nav-title mt-3'>
                        <NavLink to='/'>TRAVELOCITY</NavLink>
                    </div>
          <div className="custom-login-container m-auto mt-3">
            <button onClick={signInWithFacebook} className='w-100'> <BsFacebook/> continue with Facebook</button>
           <hr /> <span>Or</span> <hr />
            <button onClick={signInWithGoogle} className='w-100'> <ImGoogle3/> continue with Google</button>
          </div>
        </div>
    );
};

export default Login;