import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbum } from '../../redux/album/action'
import { fetchBanner } from '../../redux/banner/action'
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
        dispatch(fetchBanner(token))
        dispatch(fetchAlbum(token))
        dispatch(fetchAchievement(token))
        dispatch(fetchBerita(token))
        dispatch(fetchMenu(token))
        dispatch(fetchKontak(token))
        dispatch(fetchHubungi(token))
    }, [token, item])

    const albumData = useSelector((state) => state.albumReducer.album)
    const achievementData = useSelector((state) => state.achievementReducer.achievement)
    const beritaData = useSelector((state) => state.beritaReducer.berita)
    const menuData = useSelector((state) => state.menuReducer.menu)
    const kontakData = useSelector((state) => state.kontakReducer.kontak)
    const hubungiData = useSelector((state) => state.hubungiReducer.hubungi)
 
    const [didViewCountUp, setDidViewCountUp] = useState(false)

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    };
   
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
            <div className="container-xl">
                <div className="pl-0 pr-0">
                    <div id="carouselExampleIndicators" class="carousel slide mb-5" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="https://primefoundation.id/scheme/uploads/2020/03/corona-WEB-BANNER.jpg" alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://tiento.co.id/wp-content/uploads/2020/04/Web-Banner-Hasil-Donasi-web-1400x467.jpg.webp" alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="..." alt="Third slide" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
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
                                    console.log(data, 'ini data')
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
                        {achievementData.map((data, idx) => (
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
                                                        ? data.achievement_total
                                                        : 0
                                                }
                                                duration={6}
                                            />
                                        </VisibilitySensor>
                                    </h2>
                                    <p>{data.achievement_name}</p>
                                </div>
                            </div>
                        ))}
                        {/* </div> */}
                    </Carousel>
                </div>
                <Work data={albumData} />
                <News data={beritaData} />
                <Contact menu={menuData} kontak={kontakData} hubungi={hubungiData} />
            </div>
            <Footer />
        </>
    )
}

export default ProgramDetail