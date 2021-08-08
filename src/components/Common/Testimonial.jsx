import React from 'react';
import OwlCarousel from 'react-owl-carousel3';

const Testimonial = (props) => {
    const options = {
        loop: false,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        mouseDrag: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        dots: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            786: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    }
    const testimoniData = props.data;

    return (
        <section className="testimonials-area ptb-80 bg-f6f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Beberapa <span>Testimoni</span></h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
                {/* <OwlCarousel
                    className="owl-theme"
                    loop margin={10} nav
                > */}
                {testimoniData.length > 0 &&
                    <OwlCarousel
                        className="team-slider owl-carousel owl-theme"
                        {...options}
                    >
                        {testimoniData.map((data, idx) => (
                            <div className="mr-4" >
                                <div className="single-feedback" style={{ height: '320px' }}>
                                    <div className="client-info">
                                        <div className="client-pic" key={idx}>
                                            {/* <img src={clientImgOne} alt="client-avatar" /> */}
                                            <img src={data.thumbnail_photo_url} alt="client-avatar" />
                                        </div>

                                        <div className="client-title">
                                            <h4>{data.name}</h4>
                                            <h5>{data.role}</h5>
                                        </div>
                                    </div>

                                    <p>{data.message}</p>

                                    <span><i className="fa fa-quote-left"></i></span>
                                </div>
                            </div>
                        ))}
                        {/* </div> */}
                    </OwlCarousel>
                }
            </div>
        </section>
    );
}

export default Testimonial;