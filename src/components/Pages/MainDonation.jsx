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

const MainDonation = (props) => {

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
    const donasiData = useSelector((state) => state.donasiReducer.donasi)
    const donasi2Data = useSelector((state) => state.donasiReducer.donasi2)
    const menuData = useSelector((state) => state.menuReducer.menu)
    const kontakData = useSelector((state) => state.kontakReducer.kontak)
    const hubungiData = useSelector((state) => state.hubungiReducer.hubungi)
console.log(donasi2Data)
   const ListRutin = donasi2Data.map((item, idx) => {
       if ((idx % 2) === 1) {
           return (
                 <div class="postcard dark yellow mb-5" style={{ display: 'flex' }}>
                   <div class="postcard__text mr-3" >
                       <h1 class="postcard__title yellow"><a href="#">{item.title}</a></h1>
                       <div class="postcard__subtitle small mb-2">
                           <time datetime="2020-05-25 12:00:00">
                               <i class="fas fa-calendar-alt mr-2"></i>{item.created_at}
					            </time>
                       </div>
                       <div class="postcard__preview-txt">{item.description} shdcshdcisd sdiuvsiduvhs dvusdivusgdv sdiuvgsidugv sduvgsidu vsduv siduvg siduvg siudgv siduvg siduvg siduv gsiduv gsdvgs diuvgsiduvgisdugvisud visudgvisdgv </div>
                   </div>
                   <div className="">
                       <a class="postcard__img_link" href="#">
                           <img class="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" style={{ maxWidth: '300px' }} />
                       </a>
                   </div>
               </div>
           )
       }
       else {
           return (
               <div class="postcard dark yellow mb-5" style={{ display: 'flex' }}>
                   <div className="mr-3">
                       <a class="postcard__img_link" href="#">
                           <img class="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" style={{ maxWidth: '300px' }} />
                       </a>
                   </div>
                   <div class="postcard__text">
                       <h1 class="postcard__title yellow"><a href="#">{item.title}</a></h1>
                       <div class="postcard__subtitle small mb-2">
                           <time datetime="2020-05-25 12:00:00">
                               <i class="fas fa-calendar-alt mr-2"></i>{item.created_at}
					            </time>
                       </div>
                       <div class="postcard__preview-txt">{item.description} hwgwydv wvgwidvugwiuv wvwiuri viwuruu uiru ruwuriiehfwrigf wiugwifgihfgidfsd fsiudgsidgs d</div>
                   </div>
               </div>
           )
       }
   })
 
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
                <div className="section-title">
                    {/* <h4>We are creative</h4> */}
                    <h2>Program Donasi <span>#TiapHariBerbagi</span></h2>
                    <a className="btn btn-primary"target="_blank" href="http://ayokitapeduli.com/">Lihat lainnya</a>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
                {ListRutin}
                <Welcome data={donasiData}/>
                <Contact menu={menuData} kontak={kontakData} hubungi={hubungiData} />
            </div>
            <Footer />
        </>
    )
}

export default MainDonation