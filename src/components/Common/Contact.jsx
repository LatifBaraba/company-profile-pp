import React from 'react';
import { Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import 'isomorphic-fetch';

const CustomComponent = ({ text }) => <div><img src="http://ruralshores.com/assets/marker-icon.png" alt="map" /></div>;
 
const Contact = (props) => {

    const menuData = props.menu;
    const kontakData = props.kontak;
    const hubungiData = props.hubungi;
    
    return (
        <section id="contact" className="contact-area ptb-80 bg-f6f6f6">
            <div className="container">
                <div className="section-title">
                    {/* <h4>Get in Touch</h4> */}
                    <h2>Kontak <span>kami</span></h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
                
                <div className="row">
                    {kontakData.map((data, idx) => (
                        <div className="col-lg-4 col-md-12" key={idx}>
                            {/* <div className="contact-form">
                                <h4>Stay Connected</h4>
                            </div> */}
                            
                            <div className="col-lg-12">
                                <div className="contact-one">
                                    {/* <h4>SK Legalitas</h4> */}
                                    <img src={data.sk_legalitas} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="contact-one">
                                    <Link>
                                        {/* <span>Jl. Sukawarna No.12, Husen Sastranegara, Kec. Cicendo, Kota Bandung, Jawa Barat 40173</span> */}
                                        <span>{data.address}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="col-lg-4 col-md-12">
                        <div className="contact-two">
                            <h4>Hubungi Kami</h4>
                            <ul>
                                {hubungiData.map((data, idx) => (
                                    <li key={idx}>
                                        <a href={data.link} rel="noopener noreferrer" target="_blank">
                                            <div className="social-logo">
                                                {/* <i class="fa fa-envelope fa-lg"></i> */}
                                                <img className="mr-2" src={data.icon} alt="" style={{width:50}}/>
                                                <span>{data.title}</span>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                                {/* <li>
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
                                </li> */}
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
                                <div className="row mt-3" key={idx}>
                                    <div className="col-12">
                                        <a href={data.link} rel="noopener noreferrer" target="_blank">{data.title}</a>
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