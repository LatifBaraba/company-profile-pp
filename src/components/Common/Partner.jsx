import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import { fetchPartner } from '../../redux/partner/action'
import { useDispatch, useSelector } from 'react-redux'

const options = {
    loop: true,
    autoplay: true,
    nav: false,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: true,
    // item: 4,
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
            items:4,
        }
    }
}
 
const Partner = () => {

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPartner(token))
    }, [])

    const partnerData = useSelector((state) => state.partnerReducer.partner)
    return (
        <section id="partner" className="work-area ptb-80">
            <div className="partner-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>Partner <span>kami</span></h2>
                    </div>
                    <div className="row">
                        {partnerData.length > 0 &&
                            <OwlCarousel className="blog-slider owl-carousel owl-theme" {...options}>
                                {partnerData.map((data, idx) => (
                                    <div className="col-lg-12 col-md-12">
                                        <div className="item" key={idx} id={data.id}>
                                            <Link to="#"><img src={`${data.thumbnail_image_url}`} alt="partner" /></Link>
                                            <span>{data.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Partner;