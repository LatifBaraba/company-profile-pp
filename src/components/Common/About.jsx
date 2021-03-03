import React from 'react';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/about.jpg';
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
    }
}
 
class About extends React.Component {
    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({isOpen: true})
    }
    render(){
        return (
            <section id="about" className="about-area ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Tentang <span>Kami</span></h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                    
                    <div className="row">
                        {/* <div className="col-lg-6 col-md-12">
                            <div className="about-addax">
                                <div className="section-title">
                                    <h2>We Are Digital <span>Marketing & Branding</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <ul className="pull-left">
                                    <li><i className="fa fa-check"></i>Creative Design</li>
                                    <li><i className="fa fa-check"></i>Retina Ready</li>
                                    <li><i className="fa fa-check"></i>Responsive Design</li>
                                </ul>

                                <ul>
                                    <li><i className="fa fa-check"></i>Modern Design</li>
                                    <li><i className="fa fa-check"></i>Awesome Design</li>
                                    <li><i className="fa fa-check"></i>Digital Marketing & Branding</li>
                                </ul>

                                <Link to="#" className="btn btn-primary">Read More</Link>
                            </div>
                        </div> */}
                        
                        {/* <div className="col-lg-6 col-md-12">
                            <div className="about-video">
                                <img src={aboutImg} alt="about" />
                                <div className="video-btn">
                                    <Link 
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        to="#" 
                                        className="popup-youtube"
                                    >
                                        <i className="fa fa-play"></i>
                                    </Link>
                                    <ModalVideo 
                                        channel='youtube' 
                                        isOpen={this.state.isOpen} 
                                        videoId='bk7McNUjWgw' 
                                        onClose={() => this.setState({isOpen: false})} 
                                    />
                                </div>
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
                                    
                                    {/* <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link> */}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                {/* <div className="single-blog-item" style={{backgroundImage: `url(${require("../../assets/images/services-img1.jpg")})`}}> */}
                                <div className="single-blog-item" style={{backgroundImage: `url(https://images.unsplash.com/photo-1614759896448-7cc6a2606c38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`}}>
                                    <span>Business & Tech</span>
                                    {/* <h4><Link to="#">The best gear for starting Link small business</Link></h4> */}
                                    <h4>The best gear for starting Link small business</h4>
                                    <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                                    
                                    {/* <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link> */}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                {/* <div className="single-blog-item" style={{backgroundImage: `url(${require("../../assets/images/services-img1.jpg")})`}}> */}
                                <div className="single-blog-item" style={{backgroundImage: `url(https://images.unsplash.com/photo-1614759896448-7cc6a2606c38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`}}>
                                    <span>Business & Tech</span>
                                    {/* <h4><Link to="#">The best gear for starting Link small business</Link></h4> */}
                                    <h4>The best gear for starting Link small business</h4>
                                    <p> Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...</p>
                                    
                                    {/* <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link> */}
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;