import React, { useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import aboutImg from '../../assets/images/about.jpg';
import OwlCarousel from 'react-owl-carousel3';

const options = {
    loop: true,
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
    responsive:{
        0:{
            items:1,
        },
    }
}
 
const About = (props) => {

    const tentangData = props.data;
    
    return (
        <section id="about" className="about-area ptb-80 bg-f6f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Tentang <span>Kami</span></h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
                
                <div className="row">
                    {tentangData && tentangData.length > 0 &&
                        <OwlCarousel className="blog-slider owl-carousel owl-theme" {...options}>
                            {tentangData.map((data, idx) => (
                                <div className="col-lg-12 col-md-12" key={idx} id={data.id}>
                                    <div className="single-blog-item" style={{backgroundImage: `url(${data.thumbnail_image_url})`, width:"100%", height:"100%"}}>
                                        {/* <span>Business & Tech</span> */}
                                        {/* <h4><Link to="#">The best gear for starting Link small business</Link></h4> */}
                                        {/* <h4>The best gear for starting Link small business</h4> */}
                                        {/* text-align:center; 
                                        vertical-align: middle;
                                        display: table-cell; */}
                                        {/* <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link> */}
                                    </div>
                                    <div>
                                        <p className="text-center"style={{ verticalAlign: "middle", display: "table-cell", textAlign: "center" }}>"{data.description}"</p>
                                    </div>
                                    
                                </div>
                            ))}
                        </OwlCarousel>
                    }
                </div>
            </div>
        </section>
    );
}
 
export default About;