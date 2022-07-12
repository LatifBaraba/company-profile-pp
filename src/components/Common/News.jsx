import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import { fetchMenu } from '../../redux/menu/action';
import { fetchKontak } from '../../redux/kontak/action';
import { fetchHubungi } from '../../redux/hubungi/action';

const options = {
    loop: false,
    autoplay: true,
    nav: false,
    mouseDrag: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
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

const News = (props) => {

    const beritaData = props.data;

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const [tag, setTag] = useState("tag")
    // const [tagLine, setTagLine] = useState("BinDes")
    const [tagField, setTagField] = useState([])
    useEffect(() => {
        dispatch(fetchMenu(token))
        dispatch(fetchKontak(token))
        dispatch(fetchHubungi(token))
        }, [token, tag, dispatch])

    const menuData = useSelector((state) => state.menuReducer.menu)
    const kontakData = useSelector((state) => state.kontakReducer.kontak)
    const hubungiData = useSelector((state) => state.hubungiReducer.hubungi)

    return (
        <section id="news" className="news-area ptb-80" style={{ backgroundColor: '#f6f6f6' }}>
            <div className="container">
                <div className="section-title">
                    {/* <h4>We are creative</h4> */}
                    <h2>Berita <span>#PemudaPeduli</span></h2>
                    <Link to="/news">
                        <button className="btn btn-primary">Lihat lainnya</button>
                    </Link>
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
                                    <div className="single-blog-item" style={{ backgroundImage: `url(${data.thumbnail_image_url})` }}>
                                        {/* <Link to="#" title="Read More" className="link-btn">
                                            <i className="fa fa-arrow-right"></i>
                                        </Link> */}
                                        <Link to={{
                                            pathname: `/news/news-detail`,
                                            state: {
                                                id: data.id,
                                                sub_title: data.sub_title,
                                                image: data.thumbnail_image_url,
                                                description: data.description,
                                                created_at: data.created_at,
                                                menu: menuData,
                                                kontak: kontakData,
                                                hubungi: hubungiData
                                            }
                                        }} title="Read More" className="link-btn">
                                           <i className="fa fa-arrow-right"></i>
                                        </Link> 
                                    </div>
                                    <div>
                                        <span>{data.title}</span>
                                        {/* <h4><Link to="#">The best gear for starting Link small business</Link></h4> */}
                                        <h4>{data.sub_title}</h4>

                                        <p style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.5' }}>{data.description}</p>
                                        {/* <Link to="#" title="Read More" className="link-btn"><a><p>read more <i className="fa fa-arrow-right"></i></p></a></Link> */}
                                        {/* {console.log(data)} */}
                                        <Link to={{
                                            pathname: `/news/news-detail`,
                                            state: {
                                                id: data.id,
                                                sub_title: data.sub_title,
                                                image: data.thumbnail_image_url,
                                                description: data.description,
                                                created_at: data.created_at,
                                                menu: menuData,
                                                kontak: kontakData,
                                                hubungi: hubungiData
                                            }
                                        }} title="Read More" className="link-btn">
                                           <a><p>read more <i className="fa fa-arrow-right"></i></p></a>
                                        </Link> 

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