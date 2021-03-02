import React from 'react';
import imgOne from '../../assets/images/services-img1.jpg';
import imgTwo from '../../assets/images/services-img2.jpg';
import imgThree from '../../assets/images/services-img3.jpg';
import imgFour from '../../assets/images/services-img4.jpg';
import imgFive from '../../assets/images/services-img5.jpg';
import imgSix from '../../assets/images/services-img6.jpg';
import imgSeven from '../../assets/images/services-img7.jpg';
import imgEight from '../../assets/images/services-img8.jpg';
import imgNine from '../../assets/images/services-img9.jpg';
 
class Services extends React.Component {
    render(){
        return (
            <section id="services" className="services-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Our <span>Services</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgOne} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-pencil-square-o"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Web Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgTwo} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-linode"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Branding</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgThree} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-desktop"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Marketing</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgFour} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-line-chart"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Analytics</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgFive} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-anchor"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgSix} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-headphones"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Ui & Ux Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgSeven} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-mobile"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Responsive Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgEight} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-camera-retro"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Photography</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-services">
                                <div className="services-img">
                                    <img src={imgNine} alt="services-img" />
                                    
                                    <div className="icon">
                                        <i className="fa fa-life-ring"></i>
                                    </div>
                                </div>
                                
                                <div className="services-content">
                                    <h3>Custom Support</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Services;