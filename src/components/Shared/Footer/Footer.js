import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { RiFacebookBoxFill, RiTwitterFill } from "react-icons/ri";
import './Footer.css';



const Footer = () => {
    return (
        <footer className="section bg-footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="">
                            <h6 className="footer-heading text-uppercase text-white">Information</h6>
                            <ul className="list-unstyled footer-link mt-4">
                                <li>Pages</li>
                                <li>Our Team</li>
                                <li>Facilities</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="">
                            <h6 className="footer-heading text-uppercase text-white">Ressources</h6>
                            <ul className="list-unstyled footer-link mt-4">
                                <li>Monitoring Grader </li>
                                <li>Video Tutorial</li>
                                <li>Term and Service</li>
                                <li>Travelocity API</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="">
                            <h6 className="footer-heading text-uppercase text-white">Help</h6>
                            <ul className="list-unstyled footer-link mt-4">
                                <li>Sign Up </li>
                                <li>Login</li>
                                <li>Terms of Services</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="">
                            <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>
                            <p className="contact-info mt-4">Contact us if need help with anything</p>
                            <p className="contact-info">+88 -0170200300</p>
                            <div className="mt-5">
                                <ul className="list-inline">
                                    <li className='list-inline-item'>
                                        <span className='footer-social-icon'> <RiFacebookBoxFill/> </span>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span className='footer-social-icon'> <RiTwitterFill /> </span>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span className='footer-social-icon'> <AiFillInstagram /> </span>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span className='footer-social-icon'> <FaYoutube /> </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </footer>
    );
};

export default Footer;