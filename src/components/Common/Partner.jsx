import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

const options = {
    loop: true,
    autoplay:true,
    nav: false,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:2,
        },
        768:{
            items:4,
        },
        1200:{
            items:6,
        }
    }
}
 
class Partner extends React.Component {
    render(){
        return (
            <div className="partner-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Partner <span>kami</span></h2>
                    </div>
                    <div className="row">
                        <OwlCarousel 
                            className="partner-slider owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="item">
                                    <Link to="#"><img src={require('../../assets/images/partner-1.png')} alt="partner" /></Link>
                                    <span>lorem</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="item">
                                    <Link to="#"><img src={require('../../assets/images/partner-1.png')} alt="partner" /></Link>
                                    <span>lorem</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="item">
                                    <Link to="#"><img src={require('../../assets/images/partner-1.png')} alt="partner" /></Link>
                                    <span>lorem</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="item">
                                    <Link to="#"><img src={require('../../assets/images/partner-1.png')} alt="partner" /></Link>
                                    <span>lorem</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="item">
                                    <Link to="#"><img src={require('../../assets/images/partner-1.png')} alt="partner" /></Link>
                                    <span>lorem</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="item">
                                    <Link to="#"><img src={require('../../assets/images/partner-1.png')} alt="partner" /></Link>
                                    <span>lorem</span>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Partner;