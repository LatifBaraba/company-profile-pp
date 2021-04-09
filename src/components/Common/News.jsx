import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import { fetchBerita } from '../../redux/berita/action'
import { useDispatch, useSelector } from 'react-redux'

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
 
const News = () => {

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBerita(token))
    }, [])

    const beritaData = useSelector((state) => state.beritaReducer.berita)
    return (
        <section id="news" className="news-area ptb-80" style={{backgroundColor:'#f6f6f6'}}>
            <div className="container">
                <div className="section-title">
                    {/* <h4>We are creative</h4> */}
                    <h2>Berita <span>#PemudaPeduli</span></h2>
                    <button className="btn btn-primary">Lihat lainnya</button>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
                
                <div className="row">
                    {/* <div className="col-lg-4 col-md-6">
                        <div className="single-box">
                            <i className="fa fa-pencil-square-o icon"></i>
                            <h3>Creative Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-box">
                            <i className="fa fa-laptop icon"></i>
                            <h3>Friendly Codes</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div className="single-box">
                            <i className="fa fa-life-ring icon"></i>
                            <h3>Fast Support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    </div> */}
                    {beritaData.length > 0 &&
                        <OwlCarousel className="blog-slider owl-carousel owl-theme" {...options}>
                            {beritaData.map((data, idx) => (
                               <div className="col-lg-12 col-md-12" key={idx} id={data.id}>
                                    <div className="single-blog-item" style={{backgroundImage: `url(${data.thumbnail_image_url})`}}>
                                        <span>{data.title}</span>
                                        {/* <h4><Link to="#">The best gear for starting Link small business</Link></h4> */}
                                        <h4>{data.sub_title}</h4>
                                        {/* <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p> */}
                                        
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
 
export default News;