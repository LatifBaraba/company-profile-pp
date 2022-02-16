import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbum } from '../../redux/album/action'
import { fetchBanner } from '../../redux/program/action'
import Work from '../Common/Work'
import OwlCarousel from 'react-owl-carousel3';
import { fetchAchievement } from '../../redux/achievement/action'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchBerita } from '../../redux/berita/action'
import News from '../Common/News'
import Footer from '../Common/Footer'
import { fetchMenu } from '../../redux/menu/action'
import { fetchKontak } from '../../redux/kontak/action'
import { fetchHubungi } from '../../redux/hubungi/action'
import Contact from '../Common/Contact'

const ProgramDetail = (props) => {
    const item = props.location.state
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAlbum(token, item.tag))
        dispatch(fetchBerita(token))
        dispatch(fetchMenu(token))
        dispatch(fetchKontak(token))
        dispatch(fetchHubungi(token))
        dispatch(fetchBanner(token, item.tag))
    }, [token, item.tag])

    const albumData = useSelector((state) => state.albumReducer.album)
    const bannerData = useSelector((state) => state.programReducer.banner)
    const beritaData = useSelector((state) => state.beritaReducer.berita)
    const menuData = useSelector((state) => state.menuReducer.menu)
    const kontakData = useSelector((state) => state.kontakReducer.kontak)
    const hubungiData = useSelector((state) => state.hubungiReducer.hubungi)
 
    console.log(albumData, 'album')
    const [didViewCountUp, setDidViewCountUp] = useState(false)

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    };
    const optionsBanner = {
        items: 1,
        loop: false,
        autoplay: true,
        nav: true,
        responsiveClass: true,
        dots: false,
        autoplayHoverPause: true,
        mouseDrag: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    }

    const buttonLeft = (title_button_left, deeplink_left, isVisible) => {
        if (title_button_left != null) {
            return (
                // <AnchorLink href={`${deeplink_left ? deeplink_left : "#"} `} className={`btn btn-primary ${isVisible ? "animated fadeInDown slow opacityOne" : ""} `}>
                //     {title_button_left}
                // </AnchorLink>
                <a href={`${deeplink_left ? deeplink_left : "#"} `} className={`btn btn-primary m-2 ${isVisible ? "animated fadeInDown slow opacityOne" : ""} `} target="_blank" rel="noopener noreferrer">
                    {title_button_left}
                </a>
            )
        }
    }

    const buttonRight = (title_button_right, deeplink_right, isVisible) => {
        if (title_button_right != null) {
            return (
                // <AnchorLink href={`${deeplink_right ? deeplink_right : "#"} `} className={`btn btn-primary view-work ${isVisible ? "animated fadeInDown slow opacityOne" : ""}`}>
                //    {title_button_right}
                // </AnchorLink>
                <a href={`${deeplink_right ? deeplink_right : "#"} `} className={`btn btn-primary m-2 ${isVisible ? "animated fadeInDown slow opacityOne" : ""} `} target="_blank" rel="noopener noreferrer">
                    {title_button_right}
                </a>
            )
        }
    }
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
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    }
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <>
            {bannerData && bannerData.length > 0 &&
                <OwlCarousel
                    id="home"
                    className="home-slides owl-theme"
                    {...optionsBanner}
                >
                    {bannerData.map((data, idx) => (
                        <div className={`main-banner`} key={idx} style={{ backgroundImage: `url(${data.thumbnail_image_url})` }}>
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <VisibilitySensor delayedCall>
                                                    {({ isVisible }) => (
                                                        <div className="main-banner-text">
                                                            <h4 className={isVisible ? "animated fadeInDown slow opacityOne" : ''}>
                                                                {data.title}
                                                            </h4>
                                                            <h1 className={isVisible ? "animated fadeInDown slow opacityOne" : ''} dangerouslySetInnerHTML={{ __html: data.sub_title }} />

                                                            <p className={isVisible ? "animated fadeInDown slow opacityOne" : ''}>
                                                                {data.description}
                                                            </p>
                                                            {buttonLeft(data.title_button_left, data.deeplink_left, isVisible)}
                                                            {buttonRight(data.title_button_right, data.deeplink_right, isVisible)}
                                                            {/* <AnchorLink href="#about" className={`btn btn-primary ${isVisible ? "animated fadeInDown slow opacityOne" : ""} `}>
                                                        Get Started
                                                    </AnchorLink> */}
                                                            {/* <AnchorLink href="#work" className={`btn btn-primary view-work ${isVisible ? "animated fadeInDown slow opacityOne" : ""}`}>
                                                        View Work
                                                    </AnchorLink> */}
                                                        </div>
                                                    )}
                                                </VisibilitySensor>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            }
            <div className="container-xl" style={{ marginTop: '100px' }}>
                <div className="pl-0 pr-0">
                   
                    {/* <div id="carouselExampleIndicators" className="carousel slide mb-5" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            {bannerData.map((item, idx) => {
                                return(
                                    <div className="carousel-item active" key={idx}>
                                        <img className="d-block w-100" src={item.thumbnail_image_url} alt="First slide" />
                                    </div>
                                )
                            })}
                        </div>
                        <a class="carousel-control-prev" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div> */}
                </div>
                <div class="postcard dark yellow mb-5" style={{ display: 'flex' }}>
                    <div className="mr-3">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src={item.image} alt="Image Title" style={{ maxWidth: '300px' }} />
                        </a>
                    </div>
                    <div class="postcard__text">
                        <h1 class="postcard__title yellow"><a href="#">{item.title}</a></h1>
                        <div class="postcard__subtitle small mb-2">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>{item.created_at}
                            </time>
                        </div>
                        <div class="postcard__preview-txt">{item.description}</div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-title">

                        <h1 class="postcard__title yellow mb-2" ><a href="#" style={{ color: '#0F72BE', fontWeight: '600' }}>Beneficarries</a></h1>
                    </div>
                    <div className="shorting">
                        {item.beneficaries &&
                            <OwlCarousel className="blog-slider owl-carousel owl-theme" {...options}>
                                {item.beneficaries.map((data, idx) => {
                                    return (
                                        <div className="" key={idx} id={data.id}>
                                            <div className="single-blog-item" style={{ backgroundImage: `url(${data})`, width: "100%", height: "300px" }}>
                                            </div>
                                        </div>
                                    )
                                }
                                )}
                            </OwlCarousel>
                        }
                    </div>
                </div>
                <div className=" ptb-80" style={{ background: '#0F72BE' }}>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={5000}
                        keyBoardControl={false}
                        customTransition="all .3"
                        transitionDuration={3000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        deviceType={props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {/* <div className="row"> */}
                        {item.achievements.map((data, idx) => (
                            <div className="col-lg-12 col-md-12">
                                <div className="funFact">
                                    {/* <i className="fa fa-smile-o"></i> */}
                                    <h2 className="count">
                                        <VisibilitySensor
                                            onChange={onVisibilityChange}
                                            offset={{
                                                top: 10
                                            }}
                                            delayedCall
                                        >
                                            <CountUp
                                                start={0}
                                                end={
                                                    didViewCountUp
                                                        ? data.value
                                                        : 0
                                                }
                                                duration={6}
                                            />
                                        </VisibilitySensor>
                                    </h2>
                                    <p>{data.label}</p>
                                </div>
                            </div>
                        ))}
                        {/* </div> */}
                    </Carousel>
                </div>
            </div>
            <Work data={albumData} />
            <News data={beritaData} />
            <Contact menu={menuData} kontak={kontakData} hubungi={hubungiData} />
            <Footer />
        </>
    )
}

export default ProgramDetail