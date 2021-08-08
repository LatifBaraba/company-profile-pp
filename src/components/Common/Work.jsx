import React, { useEffect, useState } from 'react';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import { Link } from 'react-router-dom';
import mixitup from "mixitup";
import Carousel from 'react-grid-carousel'

const Work = (props) => {

    const albumData = props.data;

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [tes, setTes] = useState([])

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

    {
        albumData.map((album) => (
            images.push(`${album.thumbnail_image_url}`)
        ))
    }
    const imageOnClick = (idx) => {
        setPhotoIndex(idx)
        setIsOpen(true)
    }

    return (
        <section id="work" className="work-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2><span>Album</span></h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
            </div>

            <div className="shorting">
                <div className="row m-0" id="mix-wrapper">
                    {albumData.length > 0 &&
                        <Carousel cols={3} rows={2} gap={10} autoplay={2000} loop>
                            {albumData.map((album, idx) => (
                                <Carousel.Item key={idx}>
                                    {/* <div > */}
                                    <div className="single-work" style={{ textAlign: "center", }}>
                                        <img src={album.thumbnail_image_url} alt="work-img" style={{ objectFit: "cover", height: "250px" }} />
                                        <div className="work-content">
                                            <h4>{album.title}</h4>
                                            <h6>{album.sub_title}</h6>
                                        </div>
                                        <Link
                                            to="#"
                                            className="popup-btn"
                                            onClick={() => imageOnClick(idx)}
                                        ><i className="fa fa-plus"></i></Link>
                                    </div>
                                    {/* </div> */}
                                </Carousel.Item>
                            ))
                            }
                        </Carousel>
                    }
                </div>
            </div>
            { isOpen && (
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