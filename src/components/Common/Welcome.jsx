import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import { fetchDonasi } from '../../redux/donasi/action'
import { useDispatch, useSelector } from 'react-redux'

const options = {
    loop: true,
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
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1200:{
            items:3,
        }
    }
}
 
const Welcome = (props) => {

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDonasi(token))
    }, [])

    const donasiData = useSelector((state) => state.donasiReducer.donasi)
    return (
        <section id="welcome" className="welcome-area ptb-80">
            <div className="container">
                <div className="section-title">
                    {/* <h4>We are creative</h4> */}
                    <h2>Program Donasi <span>#TiapHariBerbagi</span></h2>
                    <button className="btn btn-primary">Lihat lainnya</button>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
                
                <div className="row">
                    {donasiData.length > 0 &&
                        <OwlCarousel className="blog-slider owl-carousel owl-theme" {...options}>
                            {donasiData.map((data, idx) => (
                                <div className="col-lg-12 col-md-12" key={idx} id={data.id}>
                                    <div className="single-blog-item" style={{backgroundImage: `url(${data.thumbnail_image_url})`}}>
                                        <span>{data.title}</span>
                                        <h4><Link to="#">{data.sub_title}</Link></h4>
                                        {/* <h4>The best gear for starting Link small business</h4> */}
                                        {/* <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>  */}
                                        
                                        <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
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
 
export default Welcome;