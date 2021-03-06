import React, { useEffect, useState } from 'react';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import { Link } from 'react-router-dom';
import mixitup from "mixitup";
 
const Work = (props) => {

    const albumData = props.data;

    const [ photoIndex, setPhotoIndex ] = useState(0);
    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        mixitup("#mix-wrapper", {
            animation: {
                effects: "fade rotateZ(0deg)",
                duration: 700
            },
            classNames: {
                block: "programs",
                elementFilter: "filter-btn",
            },
            selectors: {
                target: ".mix-target"
            }
        });
    }, [])
    
    let images = [];

    {albumData.map((album) => (
        images.push(`${album.thumbnail_image_url}`)
    ))}
    // console.log(images, 'images')
    const imageOnClick = (idx) => {
        setPhotoIndex(idx)
        // console.log(idx, 'status')
        setIsOpen(true)
    }

    return (
        <section id="work" className="work-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2><span>Album</span></h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
                
                {/* <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="shorting-menu">
                            <button 
                                className="filter" 
                                data-filter="all"
                            >
                                All
                            </button>
                            <button 
                                className="filter" 
                                data-filter=".brand"
                            >
                                Brand
                            </button>
                            <button 
                                className="filter" 
                                data-filter=".design"
                            >
                                Design
                            </button>
                            <button 
                                className="filter" 
                                data-filter=".graphic"
                            >
                                Graphic
                            </button>
                            <button 
                                className="filter" 
                                data-filter=".photoshop"
                            >
                                Photoshop
                            </button>
                            <button 
                                className="filter"
                                data-filter=".illustrator"
                            >
                                Illustrator
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
            
            <div className="shorting">
                <div className="row m-0" id="mix-wrapper">
                    {albumData.map((album, idx) => (
                        <div 
                            className="col-lg-4 col-md-6 col-sm-12 mix brand p-0 mix-target"
                        key={idx}>
                            <div className="single-work" style={{textAlign: "center"}}>
                                <img src={album.thumbnail_image_url} alt="work-img" style={{objectFit: "cover", height: "250px", margin: "auto"}} />
                                
                                <div className="work-content">
                                    <h4>{album.title}</h4>
                                    <h6>{album.sub_title}</h6>
                                    {/* <ul>
                                        <li><Link to="#">Design</Link></li>
                                        <li>.</li>
                                        <li><Link to="#">Brand</Link></li>
                                    </ul> */}
                                </div>
                                
                                <Link 
                                    to="#" 
                                    className="popup-btn"
                                    // onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                                    onClick={() => imageOnClick(idx)}
                                ><i className="fa fa-plus"></i></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="shorting">
                <div className="row m-0" id="mix-wrapper">
                    <div 
                        className="col-lg-4 col-md-6 mix brand p-0 mix-target"
                    >
                        <div className="single-work">
                            <img src={images[0]} alt="work-img" />
                            
                            <div className="work-content">
                                <h4>Creative Design</h4>
                                <ul>
                                    <li><Link to="#">Design</Link></li>
                                    <li>.</li>
                                    <li><Link to="#">Brand</Link></li>
                                </ul>
                            </div>
                            
                            <Link 
                                to="#" 
                                className="popup-btn"
                                onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                            ><i className="fa fa-plus"></i></Link>
                        </div>
                    </div>
                    
                    <div 
                        className="col-lg-4 col-md-6 mix design p-0 mix-target"
                    >
                        <div className="single-work">
                            <img src={images[1]} alt="work-img" />
                            
                            <div className="work-content">
                                <h4>Creative Design</h4>
                                <ul>
                                    <li><Link to="#">Design</Link></li>
                                    <li>.</li>
                                    <li><Link to="#">Brand</Link></li>
                                </ul>
                            </div>
                            
                            <Link 
                                to="#" 
                                className="popup-btn"
                                onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                            >
                                <i className="fa fa-plus"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mix graphic p-0 mix-target">
                        <div className="single-work">
                            <img src={images[2]} alt="work-img" />
                            
                            <div className="work-content">
                                <h4>Creative Design</h4>
                                <ul>
                                    <li><Link to="#">Design</Link></li>
                                    <li>.</li>
                                    <li><Link to="#">Brand</Link></li>
                                </ul>
                            </div>
                            
                            <Link 
                                to="#" 
                                className="popup-btn"
                                onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
                            >
                                <i className="fa fa-plus"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mix photoshop p-0 mix-target">
                        <div className="single-work">
                            <img src={images[3]} alt="work-img" />
                            
                            <div className="work-content">
                                <h4>Creative Design</h4>
                                <ul>
                                    <li><Link to="#">Design</Link></li>
                                    <li>.</li>
                                    <li><Link to="#">Brand</Link></li>
                                </ul>
                            </div>
                            
                            <Link 
                                to="#" 
                                className="popup-btn"
                                onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
                            >
                                <i className="fa fa-plus"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mix design p-0 mix-target">
                        <div className="single-work">
                            <img src={images[4]} alt="work-img" />
                            
                            <div className="work-content">
                                <h4>Creative Design</h4>
                                <ul>
                                    <li><Link to="#">Design</Link></li>
                                    <li>.</li>
                                    <li><Link to="#">Brand</Link></li>
                                </ul>
                            </div>
                            
                            <Link 
                                to="#" 
                                className="popup-btn"
                                onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
                            >
                                <i className="fa fa-plus"></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mix illustrator p-0 mix-target">
                        <div className="single-work">
                            <img src={images[5]} alt="work-img" />
                            
                            <div className="work-content">
                                <h4>Creative Design</h4>
                                <ul>
                                    <li><Link to="#">Design</Link></li>
                                    <li>.</li>
                                    <li><Link to="#">Brand</Link></li>
                                </ul>
                            </div>
                            
                            <Link 
                                to="#" 
                                className="popup-btn"
                                onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                            >
                                <i className="fa fa-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    imageTitle={photoIndex + 1 + "/" + images.length}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </section>
    );
}
 
export default Work;