import React from 'react';
import clientImgOne from '../../assets/images/client-avatar1.jpg';
import clientImgTwo from '../../assets/images/client-avatar2.jpg';
import clientImgThree from '../../assets/images/client-avatar3.jpg';
import CarouselCard from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Testimonial = (props) => {

    const testimoniData = props.data;
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
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

                <CarouselCard responsive={responsive} 
                    autoPlaySpeed={3000}
                    autoPlay={true}>
                    {/* <div className="row"> */}
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
                </CarouselCard>


            </div>
        </section>
    );
}

export default Testimonial;