import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbum } from '../../redux/album/action'
import "react-multi-carousel/lib/styles.css";
import Footer from '../Common/Footer'
import { fetchMenu } from '../../redux/menu/action'
import { fetchKontak } from '../../redux/kontak/action'
import { fetchHubungi } from '../../redux/hubungi/action'
import { fetchProgram, fetchProgramIncidental } from '../../redux/program/action';
import Contact from '../Common/Contact'
import { Link } from 'react-router-dom';
import { fetchBannerProgram } from '../../redux/banner/action';
import OwlCarousel from 'react-owl-carousel3';
import VisibilitySensor from "react-visibility-sensor";

const ProgramList = (props) => {
    

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    const [bannerProgramImage, setbannerProgramImage] = useState()
    useEffect(() => {
        dispatch(fetchProgram(token))
        dispatch(fetchProgramIncidental(token))
        dispatch(fetchAlbum(token))
        dispatch(fetchMenu(token))
        dispatch(fetchKontak(token))
        dispatch(fetchHubungi(token))
        dispatch(fetchBannerProgram(token))
    }, [token])

    const programData = useSelector((state) => state.programReducer.program)
    const programIncidental = useSelector((state) => state.programReducer.incidental)
    const menuData = useSelector((state) => state.menuReducer.menu)
    const kontakData = useSelector((state) => state.kontakReducer.kontak)
    const hubungiData = useSelector((state) => state.hubungiReducer.hubungi)
    const bannerProgram = useSelector((state) => state.bannerReducer.bannerProgram)


    const options = {
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
        if(title_button_left != null) {
            return(
                <a href={`${deeplink_left ? deeplink_left : "#"} `} className={`btn btn-primary m-2 ${isVisible ? "animated fadeInDown slow opacityOne" : ""} `} target="_blank" rel="noopener noreferrer">
                    {title_button_left}
                </a>
            )
        }
    }
    
    const buttonRight = (title_button_right, deeplink_right, isVisible) => {
        if(title_button_right != null) {
            return(
                <a href={`${deeplink_right ? deeplink_right : "#"} `} className={`btn btn-primary m-2 ${isVisible ? "animated fadeInDown slow opacityOne" : ""} `} target="_blank" rel="noopener noreferrer">
                    {title_button_right}
                </a>
            )
        }
    }

    const ListProgram = programData.map((item, idx) => {
        return (
            <div class="postcard dark yellow mb-5" style={{ display: 'flex' }} key={idx}>
                <div className="mr-3">
                    <a class="postcard__img_link" href="#">
                        <Link  to={
                            `/program-detail/` + item.tag + '/' + item.id
                            // state: {
                            //     id: item.id,
                            //     title: item.sub_title,
                            //     image: item.thumbnail_image_url,
                            //     description: item.description,
                            //     created_at: item.created_at,
                            //     beneficaries: item.beneficaries_image_url,
                            //     tag: item.tag,
                            //     achievements: item.achievements
                            // }
                        } target={"_blank"}>
                            <img class="postcard__img" src={item.thumbnail_image_url} alt="Image Title" style={{ maxWidth: '300px' }} />
                        </Link>
                    </a>
                </div>
                <div class="postcard__text">
                    <Link to={{
                        pathname: `/program-detail/`  + item.tag + '/' + item.id,
                        state: {
                            id: item.id,
                            title: item.sub_title,
                            image: item.thumbnail_image_url,
                            description: item.description,
                            created_at: item.created_at,
                            beneficaries: item.beneficaries_image_url,
                            tag: item.tag,
                            achievements: item.achievements
                        }
                    }} >
                        <h1 class="postcard__title yellow">{item.sub_title}</h1>
                    </Link>
                    <div class="postcard__subtitle small mb-2">
                        <time datetime="2020-05-25 12:00:00">
                            <i class="fas fa-calendar-alt mr-2"></i>{item.created_at}
                        </time>
                    </div>
                    <div class="postcard__preview-txt">{item.description}</div>
                </div>
            </div>
        )
    })
    const ListProgramIncd = programIncidental.map((item, idx) => {
        {console.log(item)}
        return (
            <div class="postcard dark yellow mb-5" style={{ display: 'flex' }} key={idx}>
                <div className="mr-3">
                    <a class="postcard__img_link" href="#">
                        <Link   to={{
                            pathname: `/program-detail/`  + item.tag + '/' + item.id,
                            state: {
                                id: item.id,
                                title: item.sub_title,
                                image: item.thumbnail_image_url,
                                description: item.description,
                                created_at: item.created_at,
                                beneficaries: item.beneficaries_image_url
                            }
                        }}>
                            <img class="postcard__img" src={item.thumbnail_image_url} alt="Image Title" style={{ maxWidth: '300px' }} />
                        </Link>
                    </a>
                </div>
                <div class="postcard__text">
                    <Link to={{
                        pathname: `/program-detail/`  + item.tag + '/' + item.id,
                        state: {
                            id: item.id,
                            title: item.sub_title,
                            image: item.thumbnail_image_url,
                            description: item.description,
                            created_at: item.created_at,
                            beneficaries: item.beneficaries_image_url

                        }
                    }} >
                        <h1 class="postcard__title yellow">{item.sub_title}</h1>
                    </Link>
                    <div class="postcard__subtitle small mb-2">
                        <time datetime="2020-05-25 12:00:00">
                            <i class="fas fa-calendar-alt mr-2"></i>{item.created_at}
                        </time>
                    </div>
                    <div class="postcard__preview-txt">{item.description}</div>
                </div>
            </div>
        )
    })

    // useEffect(() => {
    //     bannerProgram.map((e) =>{
    //         setbannerProgramImage(e.thumbnail_image_url)
    //     })
    // }, [bannerProgram])
    
    return (
        <>
            <div className="container-xl">
                <div className="pl-0 pr-0">

                <OwlCarousel 
                    id="home"
                    className="home-slides owl-theme"
                    {...options}
                >
                {bannerProgram.map((data, idx) => (
                    <div className={`main-banner`} key={idx} style={{backgroundImage: `url(${data.thumbnail_image_url})`, height: '400px' }}>
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            {/* <VisibilitySensor delayedCall> */}
                                            {/* {({ isVisible }) => (
                                                <div className="main-banner-text">
                                                    <h4 className={ isVisible ? "animated fadeInDown slow opacityOne" : ''}>
                                                        {data.title}
                                                    </h4>
                                                    <h1 className={ isVisible ? "animated fadeInDown slow opacityOne" : ''} dangerouslySetInnerHTML={{ __html: data.sub_title }}/>

                                                    <p className={ isVisible ? "animated fadeInDown slow opacityOne" : ''}>
                                                        {data.description}
                                                    </p>
                                                </div>
                                            )} */}
                                            {/* </VisibilitySensor> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
            
                    {/* <div id="carouselExampleIndicators" class="carousel slide mb-5" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                                {bannerProgram.map((e) => (
                                    <div class="carousel-item">
                                            <img class="d-block w-100" style={{height: '320px'}} src={e.thumbnail_image_url} alt="" />
                                    </div>
                                ))}
                            
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
                    </div> */}
                </div>
                <div className="section-title">
                    <h1 class="postcard__title yellow mb-2" ><a style={{ color: '#0F72BE', fontWeight: '600' }}>Program Utama</a></h1>
                </div>
                {ListProgram}
                <div className="section-title">
                    <h1 class="postcard__title yellow mb-2" ><a style={{ color: '#0F72BE', fontWeight: '600' }}>Program Incidental</a></h1>
                </div>
                {ListProgramIncd}
            </div>
            <Contact menu={menuData} kontak={kontakData} hubungi={hubungiData} />
            <Footer />
        </>
    )
}

export default ProgramList