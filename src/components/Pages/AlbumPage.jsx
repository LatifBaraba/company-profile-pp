import React, { useEffect, useState } from 'react';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import { Link } from 'react-router-dom';
import mixitup from "mixitup";
import { fetchAlbum } from '../../redux/album/action';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Common/Contact';
import { fetchMenu } from '../../redux/menu/action';
import { fetchKontak } from '../../redux/kontak/action';
import { fetchHubungi } from '../../redux/hubungi/action';
import Footer from '../Common/Footer';

const Album = (props) => {
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    // const albumData = props.data;

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const albumData = useSelector((state) => state.albumReducer.album)
    const menuData = useSelector((state) => state.menuReducer.menu)
    const kontakData = useSelector((state) => state.kontakReducer.kontak)
    const hubungiData = useSelector((state) => state.hubungiReducer.hubungi)

    useEffect(() => {
        dispatch(fetchAlbum(token))
        dispatch(fetchMenu(token))
        dispatch(fetchKontak(token))
        dispatch(fetchHubungi(token))
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
    }, [token])

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
        <>
            <section id="work" className="work-area ptb-80">
                <div className="container">
                    <div className="shorting">
                        <div className="row m-0" id="mix-wrapper">
                            {albumData.length > 0 &&
                                albumData.map((album, idx) => (
                                    <div className=" col-6 single-work" style={{ textAlign: "center", }}>
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
                                ))
                            }
                        </div>
                    </div>
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
                </div>
            </section>
            <Contact menu={menuData} kontak={kontakData} hubungi={hubungiData} />
            <Footer/>
        </>
    );
}

export default Album