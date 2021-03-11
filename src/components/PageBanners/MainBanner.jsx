import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import VisibilitySensor from "react-visibility-sensor";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const options = {
    items:1,
    loop:true,
    autoplay:true,
    nav:true,
    responsiveClass:true,
    dots:false,
    autoplayHoverPause:true,
    // mouseDrag:true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ]
}

const MainBanner = (props) => {
    return (
        <OwlCarousel 
                id="home"
                className="home-slides owl-theme"
                {...options}
            >
            {props.slideData.map((data, idx) => (
                <div className={`main-banner ${data.klasName}`} key={idx}>
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-text">
                                                <h4 
                                                    className={
                                                        isVisible
                                                            ? "animated fadeInDown slow opacityOne" : ''
                                                    }
                                                >
                                                    {data.heading}
                                                </h4>
                                                <h1 
                                                    className={
                                                        isVisible
                                                            ? "animated fadeInDown slow opacityOne" : ''
                                                    }
                                                    dangerouslySetInnerHTML={{ __html: data.subHeading }}
                                                />

                                                <p 
                                                    className={
                                                        isVisible
                                                            ? "animated fadeInDown slow opacityOne" : ''
                                                    }
                                                >
                                                    {data.text}
                                                </p>
                                                <AnchorLink 
                                                    href="#about" 
                                                    className={`
                                                        btn btn-primary ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                    `}
                                                    
                                                    
                                                >
                                                    Get Started
                                                </AnchorLink>
                                                <AnchorLink
                                                    href="#work" 
                                                    className={`
                                                        btn btn-primary view-work ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                    `}
                                                >
                                                    View Work
                                                </AnchorLink>
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
    )
  }

MainBanner.defaultProps = {
    slideData: [
        {
            heading: "We Are Creative",
            subHeading: "Nice To <span>Meet</span> You",
            // text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, nulla vitae efficitur hendrerit, velit elit tempus diam, in porttitor risus est id odio. Nulla ut accumsan mi. In hac habitasse platea dictumst. Mauris ut arcu suscipit, laoreet dui in, eleifend nibh. Morbi volutpat augue turpis, ut lobortis sem bibendum.",
            klasName: "item-bg-two"
        },
        {
            heading: "We Are Professional",
            subHeading: "Best <span>Digital</span> Experience",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            klasName: "item-bg-one"
        },
        {
            heading: "We Are Designer",
            subHeading: "Creativity is  <span>Intelligence</span>",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            klasName: "item-bg-three"
        },
    ]
}
 
export default MainBanner;