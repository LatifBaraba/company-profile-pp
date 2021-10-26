import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../../assets/css/news.css"
import { fetchBerita, fetchBeritaByTag, fetchBeritaHeadline, fetchTagBerita } from '../../redux/berita/action'
import { fetchHubungi } from '../../redux/hubungi/action'
import { fetchKontak } from '../../redux/kontak/action'
import { fetchMenu } from '../../redux/menu/action'
import Contact from '../Common/Contact'
import OwlCarousel from 'react-owl-carousel3';
import { Link } from 'react-router-dom'
import Footer from '../Common/Footer'

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
            items: 1
        },
        1200: {
            items: 1
        }
    }
}
const NewsPage = () => {
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const [tag, setTag] = useState("tag")
    // const [tagLine, setTagLine] = useState("BinDes")
    const [tagField, setTagField] = useState([])
    useEffect(() => {
        dispatch(fetchBerita(token))
        dispatch(fetchMenu(token))
        dispatch(fetchKontak(token))
        dispatch(fetchHubungi(token))
        dispatch(fetchTagBerita(token))
        dispatch(fetchBeritaHeadline(token))
        dispatch(fetchBeritaByTag(token, tag, "BinDes"))
    }, [token, tag, dispatch])
    useEffect(() => {
        setTagField(newArr)

    }, [newArr])
    const beritaData = useSelector((state) => state.beritaReducer.berita)
    const tagList = useSelector((state) => state.beritaReducer.tagList)
    const beritaTagData = useSelector((state) => state.beritaReducer.beritaTag)
    const beritaHeadlineData = useSelector((state) => state.beritaReducer.beritaHeadline)
    const getLoading = useSelector((state) => state.beritaReducer.getLoading)
    const menuData = useSelector((state) => state.menuReducer.menu)
    const kontakData = useSelector((state) => state.kontakReducer.kontak)
    const hubungiData = useSelector((state) => state.hubungiReducer.hubungi)

   
    const ListTag = tagList.map((item, idx) => {
        return (
            <li className={`list-group-item + ${item.Tag === tagField[0] ? "active" : ""} `} key={idx} onClick={() =>
                dispatch(fetchBeritaByTag(token, tag, item.Tag))
            }
                style={{ cursor: 'pointer' }}>{item.Tag}</li>
        )
    })
    const SliceNews = beritaData && beritaData.slice(0, 5)
    const LateNews = SliceNews && SliceNews.map((late, idx) => {
        return (
            <>
                <div className="row mb-2 mt-2" key={idx}>
                    <div className="col-8">
                        <span>{late.sub_title}</span>
                        <div>
                            <small>{late.created_at.slice(0, 10)}</small>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src={late.thumbnail_image_url} alt="thumb" className="img-fluid img-lg" style={{ width: '75px', height: '75px' }} />
                    </div>
                </div>
                <hr></hr>
            </>
        )

    })
    let newArr = []
    const ListNews = beritaTagData && beritaTagData.map((news, idx) => {
        newArr.push(news.tag)
        return (
            <div class="row">
                <div class="col-sm-4 grid-margin">
                    <div class="position-relative">
                        <div class="rotate-img">
                            <img src={news.thumbnail_image_url} alt="thumb" class="img-fluid" />
                        </div>
                        <div class="badge-positioned">
                            <span class="badge badge-danger font-weight-bold">{news.tag}</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8  grid-margin">
                    <Link to={{
                        pathname: `/news/news-detail`,
                        state: {
                            id: news.id,
                            sub_title: news.sub_title,
                            image: news.thumbnail_image_url,
                            description: news.description,
                            created_at: news.created_at,
                            menu: menuData,
                            kontak: kontakData,
                            hubungi: hubungiData
                        }
                    }}>
                        <h2 class="mb-2 font-weight-600">
                            {news.sub_title}
                        </h2>
                    </Link> 
                    <div class="fs-13 mb-2">
                        {news.created_at.slice(0, 10)}
                    </div>
                    <p class="mb-0">
                        {news.description}
                    </p>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="container-xl" style={{ marginTop: '100px' }}>
                <div className="pl-0 pr-0">
                    <div className="row aos-init aos-animate mb-5" data-aos="fade-up">

                        <div className="col-xl-8 stretch-card grid-margin">
                            {beritaHeadlineData.length > 0 &&
                                <OwlCarousel
                                    className="team-slider owl-carousel owl-theme"
                                    {...options}
                                >
                                    {beritaHeadlineData.map((item, idx) => {
                                        return (
                                            <div className="position-relative">
                                                <img src={item.thumbnail_image_url} alt="banner" className="img-fluid" style={{ height: '400px', width: '400vh' }} />
                                                <div className="banner-content">
                                                    <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                                                        HEADLINE NEWS
                                                </div>
                                                    <h1 className="mb-0">{item.title}</h1>
                                                    <h1 className="mb-2">
                                                        {item.sub_title}
                                                    </h1>
                                                    <div className="fs-12">
                                                        <span className="mr-2">Photo </span>10 Minutes ago
                                                </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </OwlCarousel>
                            }
                        </div>

                        {/* <div className="col-xl-8 stretch-card grid-margin">
                            <div className="position-relative">
                                <img src="https://www.bootstrapdash.com/demo/world-time/assets/images/dashboard/banner.jpg" alt="banner" className="img-fluid" />
                                <div className="banner-content">
                                    <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                                        global news
                                    </div>
                                    <h1 className="mb-0">GLOBAL PANDEMIC</h1>
                                    <h1 className="mb-2">
                                        Coronavirus Outbreak LIVE Updates: ICSE, CBSE Exams
                                        Postponed, 168 Trains
                                    </h1>
                                    <div className="fs-12">
                                        <span className="mr-2">Photo </span>10 Minutes ago
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-4 stretch-card grid-margin">
                            <div className="card bg-dark text-white">
                                <div className="card-body">
                                    <h2 className="mb-5">Latest news</h2>
                                    {LateNews}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-lg-3" >
                            <div>
                                <h2 style={{ color: '#0F72BE' }}>Category</h2>
                                <br></br>
                                <div class="card">
                                    <ul class="list-group">
                                        {ListTag}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="card" style={{ border: 'none' }}>
                                <div class="card-body">
                                    {getLoading ? (
                                        <div>
                                            Loading...
                                        </div>) : ListNews}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact menu={menuData} kontak={kontakData} hubungi={hubungiData} />
            <Footer/>
        </>
    )
}

export default NewsPage