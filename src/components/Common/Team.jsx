import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import { Link } from 'react-router-dom';

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
 
const Team = (props) => {

    const teamData = props.data;

    return (
        <section id="team" className="team-area ptb-80">
            <div className="container">
                <div className="section-title">
                    {/* <h4>Pemuda Peduli</h4> */}
                    <h2>Team <span>kami</span></h2>
                    <Link to="/team-kami">
                        <button className="btn btn-primary">Lihat lainnya</button>
                    </Link>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
                
                <div className="row">
                {teamData.length > 0 &&
                    <OwlCarousel 
                        className="team-slider owl-carousel owl-theme"
                        {...options}
                    >
                    {teamData.map((data, idx) => (
                        <div className="col-lg-12" key={idx}>
                            <div className="our-team">
                                <div className="pic">
                                    <img src={data.thumbnail_photo_url} alt="team-img" />
                                </div>

                                <div className="team-content">
                                    <h3 className="title">{data.name}</h3>
                                    <span className="post">{data.role}</span>
                                </div>

                                <div className="social">
                                    <ul>
                                        <li><a href={data.facebook_link} className="fa fa-facebook" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.google_link} className="fa fa-google-plus" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.instagram_link} className="fa fa-instagram" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.linkedin_link} className="fa fa-linkedin" rel="noopener noreferrer" target="_blank"></a></li>
                                    </ul>
                                </div>
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
 
export default Team;