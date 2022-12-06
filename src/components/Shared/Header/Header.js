import React from 'react';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
const Header = () => {
    const { user, handleLogOut } = useAuth()

    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg  custom-nav-container">
                <div className="container ">
                    <div className='custom-nav-title'>
                        <NavLink to='/'>TRAVELOCITY</NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mb-lg-0  custom-nav-style">
                            <li className="nav-item">
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/myBooking'>My Booking</NavLink>
                            </li>
                            <li className="nav-item ">
                                <HashLink smooth to="/#facilities">
                                    Facilities
                                </HashLink>
                            </li>

                            <li className="nav-item">
                                <HashLink smooth to="/#contact">Contact</HashLink>
                            </li>
                        </ul>
                        <form className="d-flex mt-3">
                            <NavLink to='/admin' className=" me-3 custom-nav-button rounded-pill"><span>Admin</span> </NavLink>
                            {
                                user?.email ? "" : <NavLink to='/login' className="custom-nav-button rounded-pill"><span>Login</span></NavLink>
                            }

                            {
                                user?.email ? <NavLink data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="custom-nav-button rounded-pill">{user.displayName}</NavLink> : ""
                            }
                            
                        </form>
                    </div>
                </div>
            </nav>


            <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-center">

                        <div className="modal-body">
                            <p>{user.email}</p>
                            <p>{user.displayName}</p>
                            <button onClick={handleLogOut} className='custom-nav-button rounded-pill' data-bs-dismiss="modal">Logout</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;