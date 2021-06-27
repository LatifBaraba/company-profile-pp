import React from 'react';
import clientImgOne from '../../assets/images/client-avatar1.jpg';
import clientImgTwo from '../../assets/images/client-avatar2.jpg';
import clientImgThree from '../../assets/images/client-avatar3.jpg';
 
const Testimonial = (props) => {
    
    const testimoniData = props.data;

    return (
        <section className="testimonials-area ptb-80 bg-f6f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Beberapa <span>Testimoni</span></h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
                
                <div className="row">
                    {testimoniData.map((data, idx) => (
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feedback">
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
                </div>

            </div>
        </section>
    );
}
 
export default Testimonial;