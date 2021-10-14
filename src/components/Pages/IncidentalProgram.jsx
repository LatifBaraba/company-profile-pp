import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Welcome from '../Common/Welcome'
import MainBanner from '../PageBanners/MainBanner'
import { fetchAlbum } from '../../redux/album/action'
import { fetchBanner } from '../../redux/banner/action'
import { fetchBeneficaries } from '../../redux/beneficaries/action'
import { fetchDonasi, fetchDonasi2 } from '../../redux/donasi/action'
import Beneficaries from '../Common/Beneficaries'
import Work from '../Common/Work'
import { Link } from 'react-router-dom';
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

const IncidentalProgram = (props) => {
    const item = props.location.state

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBanner(token))
        dispatch(fetchDonasi(token))
        dispatch(fetchDonasi2(token))
        dispatch(fetchBeneficaries(token))
        dispatch(fetchAlbum(token))
        dispatch(fetchAchievement(token))
        dispatch(fetchBerita(token))
        dispatch(fetchMenu(token))
        dispatch(fetchKontak(token))
        dispatch(fetchHubungi(token))
    }, [token])
    const bannerData = useSelector((state) => state.bannerReducer.banner)
    const donasiData = useSelector((state) => state.donasiReducer.donasi)
    const donasi2Data = useSelector((state) => state.donasiReducer.donasi2)
    const beneficariesData = useSelector((state) => state.beneficariesReducer.beneficaries)
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
    console.log(beneficariesData, 'data')
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
                            <img class="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" style={{ maxWidth: '300px' }} />
                        </a>
                    </div>
                    <div class="postcard__text">
                            <h1 class="postcard__title yellow"><a href="#">Bencana Sosial</a></h1>
                        <div class="postcard__subtitle small mb-2">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					            </time>
                        </div>
                        <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                    </div>
                </div>
                <div class="postcard dark yellow mb-5" style={{ display: 'flex' }}>
                    <div class="postcard__text mr-3" >
                        <h1 class="postcard__title yellow"><a href="#">Bencana Sosial</a></h1>
                        <div class="postcard__subtitle small mb-2">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					            </time>
                        </div>
                        <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                    </div>
                    <div className="">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" style={{ maxWidth: '300px' }} />
                        </a>
                    </div>
                </div>
                <div class="postcard dark yellow mb-5" style={{ display: 'flex' }}>
                    <div className="mr-3">
                        <a class="postcard__img_link" href="#">
                            <img class="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" style={{ maxWidth: '300px' }} />
                        </a>
                    </div>
                    <div class="postcard__text">
                        <h1 class="postcard__title yellow"><a href="#">Bencana Sosial</a></h1>
                        <div class="postcard__subtitle small mb-2">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					            </time>
                        </div>
                        <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                    </div>
                </div>
                <Work data={albumData} />
                <News data={beritaData} />
                <Contact menu={menuData} kontak={kontakData} hubungi={hubungiData} />
            </div>
            <Footer />
        </>
    )
}

export default IncidentalProgram