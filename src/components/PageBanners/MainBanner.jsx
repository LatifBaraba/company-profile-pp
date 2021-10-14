import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import VisibilitySensor from "react-visibility-sensor";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { fetchBanner } from '../../redux/banner/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const options = {
    items: 1,
    loop: false,
    autoplay: true,
    nav: true,
    responsiveClass: true,
    dots: false,
    autoplayHoverPause: true,
    mouseDrag: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ]
}

const buttonLeft = (title_button_left, deeplink_left, isVisible) => {
    if(title_button_left != null) {
        return(
            // <AnchorLink href={`${deeplink_left ? deeplink_left : "#"} `} className={`btn btn-primary ${isVisible ? "animated fadeInDown slow opacityOne" : ""} `}>
            //     {title_button_left}
            // </AnchorLink>
            <a href={`${deeplink_left ? deeplink_left : "#"} `} className={`btn btn-primary m-2 ${isVisible ? "animated fadeInDown slow opacityOne" : ""} `} target="_blank" rel="noopener noreferrer">
                {title_button_left}
            </a>
        )
    }
}

const buttonRight = (title_button_right, deeplink_right, isVisible) => {
    if(title_button_right != null) {
        return(
            // <AnchorLink href={`${deeplink_right ? deeplink_right : "#"} `} className={`btn btn-primary view-work ${isVisible ? "animated fadeInDown slow opacityOne" : ""}`}>
            //    {title_button_right}
            // </AnchorLink>
            <a href={`${deeplink_right ? deeplink_right : "#"} `} className={`btn btn-primary m-2 ${isVisible ? "animated fadeInDown slow opacityOne" : ""} `} target="_blank" rel="noopener noreferrer">
                {title_button_right}
            </a>
        )
    }
}

const MainBanner = (props) => {
   
    const bannerData = props.data;
    
    return (
        <>
        {bannerData && bannerData.length > 0 &&
            <OwlCarousel 
                    id="home"
                    className="home-slides owl-theme"
                    {...options}
                >
                {bannerData.map((data, idx) => (
                    <div className={`main-banner`} key={idx} style={{backgroundImage: `url(${data.thumbnail_image_url})`}}>
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <VisibilitySensor delayedCall>
                                            {({ isVisible }) => (
                                                <div className="main-banner-text">
                                                    <h4 className={ isVisible ? "animated fadeInDown slow opacityOne" : ''}>
                                                        {data.title}
                                                    </h4>
                                                    <h1 className={ isVisible ? "animated fadeInDown slow opacityOne" : ''} dangerouslySetInnerHTML={{ __html: data.sub_title }}/>

                                                    <p className={ isVisible ? "animated fadeInDown slow opacityOne" : ''}>
                                                        {data.description}
                                                    </p>
                                                    {buttonLeft(data.title_button_left, data.deeplink_left, isVisible)}
                                                    {buttonRight(data.title_button_right, data.deeplink_right, isVisible)}
                                                    {/* <AnchorLink href="#about" className={`btn btn-primary ${isVisible ? "animated fadeInDown slow opacityOne" : ""} `}>
                                                        Get Started
                                                    </AnchorLink> */}
                                                    {/* <AnchorLink href="#work" className={`btn btn-primary view-work ${isVisible ? "animated fadeInDown slow opacityOne" : ""}`}>
                                                        View Work
                                                    </AnchorLink> */}
                                                </div>
                                            )}
                                            </VisibilitySensor>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        }
        </>
    )
  }
 
export default MainBanner;