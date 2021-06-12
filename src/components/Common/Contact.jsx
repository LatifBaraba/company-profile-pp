import React from 'react';
import { Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import 'isomorphic-fetch';

const CustomComponent = ({ text }) => <div><img src="http://ruralshores.com/assets/marker-icon.png" alt="map" /></div>;
 
const Contact = (props) => {
    
    const menuData = props.data;
    
    return (
        <section id="contact" className="contact-area ptb-80 bg-f6f6f6">
            <div className="container">
                <div className="section-title">
                    {/* <h4>Get in Touch</h4> */}
                    <h2>Kontak <span>kami</span></h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
                
                <div className="row">
                    
                    <div className="col-lg-4 col-md-12">
                        {/* <div className="contact-form">
                            <h4>Stay Connected</h4>
                        </div> */}
                        <div className="col-lg-12">
                            <div className="contact-one">
                                <h4>SK Legalitas</h4>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contact-one">
                                <Link>
                                    <span>Jl. Sukawarna No.12, Husen Sastranegara, Kec. Cicendo, Kota Bandung, Jawa Barat 40173</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="contact-two">
                            <h4>Hubungi Kami</h4>
                            <ul>
                                <li>
                                    <Link>
                                        <div className="social-logo">
                                            <i class="fa fa-envelope fa-lg"></i>
                                            <span>Email</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <div className="social-logo">
                                            <i class="fa fa-instagram fa-lg"></i>
                                            <span>Instagram</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <div className="social-logo">
                                            <i class="fa fa-twitter fa-lg"></i> 
                                            <span>Twitter</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <div className="social-logo">
                                            <i class="fa fa-youtube fa-lg"></i>
                                            <span> Youtube</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <div className="social-logo">
                                            <i class="fa fa-spotify fa-lg"></i>
                                            <span>Spotify</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="contact-two">
                            <div className="row">
                                <div className="col-12">
                                    <h4>Menu Extras</h4>
                                </div>
                            </div>
                            {menuData.map((data, idx) => (
                                <div className="row mt-3">
                                    <div className="col-12">
                                        <a href="http://url.com" rel="noopener noreferrer" target="_blank">Link Here</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;