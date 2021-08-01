import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

const options = {
    loop: false,
    autoplay: true,
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
            items: 1,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
}

const Donasi = (props) => {

    const donasiDuaData = props.data;
    return (
        <section id="welcome" className="welcome-area ptb-80">
            <div className="container">
                <div className="section-title">
                    {/* <h4>We are creative</h4> */}
                    <h2>Program Donasi <span>#CeritaDariJalanan</span></h2>
                    <button className="btn btn-primary">Lihat lainnya</button>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>

                <div className="row">
                    {donasiDuaData.length > 0 &&
                        <OwlCarousel className="blog-slider owl-carousel owl-theme" {...options}>
                            {donasiDuaData.map((data, idx) => (
                                data.is_show === true ? (
                                    <div className="col-lg-12 col-md-12" key={idx} id={data.id}>
                                        <div className="single-blog-item" style={{ backgroundImage: `url(${data.thumbnail_image_url})` }}>
                                        </div>
                                        <div>
                                            <span>{data.title}</span>
                                            <h4>{data.sub_title}</h4>
                                            <p style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.5' }}>{data.description}</p>
                                            <Link to="#" title="Read More" className="link-btn"><a><p>read more <i className="fa fa-arrow-right"></i></p></a></Link>
                                        </div>
                                    </div>
                                ) : null)
                            )}
                        </OwlCarousel>
                    }
                </div>
            </div>
        </section>
    );

}

export default Donasi;