import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

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
 
class Program extends React.Component {
    render(){
        return (
            <section id="program" className="welcome-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        {/* <h4>We are creative</h4> */}
                        <h2>Program <span>kami</span></h2>
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
                        <OwlCarousel 
                            className="blog-slider owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                {/* <div className="single-blog-item" style={{backgroundImage: `url(${require("../../assets/images/services-img1.jpg")})`}}> */}
                                <div className="single-blog-item" style={{backgroundImage: `url(https://images.unsplash.com/photo-1614759896448-7cc6a2606c38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`}}>
                                    <span>Business & Tech</span>
                                    {/* <h4><Link to="#">The best gear for starting Link small business</Link></h4> */}
                                    <h4>The best gear for starting Link small business</h4>
                                    <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                                    
                                    <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                {/* <div className="single-blog-item" style={{backgroundImage: `url(${require("../../assets/images/services-img1.jpg")})`}}> */}
                                <div className="single-blog-item" style={{backgroundImage: `url(https://images.unsplash.com/photo-1614759896448-7cc6a2606c38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`}}>
                                    <span>Business & Tech</span>
                                    {/* <h4><Link to="#">The best gear for starting Link small business</Link></h4> */}
                                    <h4>The best gear for starting Link small business</h4>
                                    <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                                    
                                    <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                {/* <div className="single-blog-item" style={{backgroundImage: `url(${require("../../assets/images/services-img1.jpg")})`}}> */}
                                <div className="single-blog-item" style={{backgroundImage: `url(https://images.unsplash.com/photo-1614759896448-7cc6a2606c38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`}}>
                                    <span>Business & Tech</span>
                                    {/* <h4><Link to="#">The best gear for starting Link small business</Link></h4> */}
                                    <h4>The best gear for starting Link small business</h4>
                                    <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                                    
                                    <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                {/* <div className="single-blog-item" style={{backgroundImage: `url(${require("../../assets/images/services-img1.jpg")})`}}> */}
                                <div className="single-blog-item" style={{backgroundImage: `url(https://images.unsplash.com/photo-1614759896448-7cc6a2606c38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`}}>
                                    <span>Business & Tech</span>
                                    {/* <h4><Link to="#">The best gear for starting Link small business</Link></h4> */}
                                    <h4>The best gear for starting Link small business</h4>
                                    <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                                    
                                    <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                {/* <div className="single-blog-item" style={{backgroundImage: `url(${require("../../assets/images/services-img1.jpg")})`}}> */}
                                <div className="single-blog-item" style={{backgroundImage: `url(https://images.unsplash.com/photo-1614759896448-7cc6a2606c38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`}}>
                                    <span>Business & Tech</span>
                                    {/* <h4><Link to="#">The best gear for starting Link small business</Link></h4> */}
                                    <h4>The best gear for starting Link small business</h4>
                                    <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                                    
                                    <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Program;