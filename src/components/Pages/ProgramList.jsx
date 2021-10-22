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

const ProgramList = (props) => {

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProgram(token))
        dispatch(fetchProgramIncidental(token))
        dispatch(fetchAlbum(token))
        dispatch(fetchMenu(token))
        dispatch(fetchKontak(token))
        dispatch(fetchHubungi(token))
    }, [token])

    const programData = useSelector((state) => state.programReducer.program)
    const programIncidental = useSelector((state) => state.programReducer.incidental)
    const menuData = useSelector((state) => state.menuReducer.menu)
    const kontakData = useSelector((state) => state.kontakReducer.kontak)
    const hubungiData = useSelector((state) => state.hubungiReducer.hubungi)

    const ListProgram = programData.map((item, idx) => {
        return (
            <div class="postcard dark yellow mb-5" style={{ display: 'flex' }} key={idx}>
                <div className="mr-3">
                    <a class="postcard__img_link" href="#">
                        <Link to={{
                            pathname: `/program-detail`,
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
                        }}>
                            <img class="postcard__img" src={item.thumbnail_image_url} alt="Image Title" style={{ maxWidth: '300px' }} />
                        </Link>
                    </a>
                </div>
                <div class="postcard__text">
                    <Link to={{
                        pathname: `/program-detail`,
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
                    }}>
                        <h1 class="postcard__title yellow"><a href="#">{item.sub_title}</a></h1>
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
        return (
            <div class="postcard dark yellow mb-5" style={{ display: 'flex' }} key={idx}>
                <div className="mr-3">
                    <a class="postcard__img_link" href="#">
                        <Link to={{
                            pathname: `/program-detail`,
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
                        pathname: `/program-detail`,
                        state: {
                            id: item.id,
                            title: item.sub_title,
                            image: item.thumbnail_image_url,
                            description: item.description,
                            created_at: item.created_at,
                            beneficaries: item.beneficaries_image_url

                        }
                    }}>
                        <h1 class="postcard__title yellow"><a href="#">{item.sub_title}</a></h1>
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
                    <h1 class="postcard__title yellow mb-2" ><a href="#" style={{ color: '#0F72BE', fontWeight: '600' }}>Program Utama</a></h1>
                </div>
                {ListProgram}
                <div className="section-title">
                    <h1 class="postcard__title yellow mb-2" ><a href="#" style={{ color: '#0F72BE', fontWeight: '600' }}>Program Incidental</a></h1>
                </div>
                {ListProgramIncd}
                {/* <div class="postcard dark yellow mb-5" style={{ display: 'flex' }}>
                    <div className="mr-3">
                        <a class="postcard__img_link" href="#">
                            <Link to="/incidental-program">
                                <img class="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" style={{ maxWidth: '300px' }} />
                            </Link>
                        </a>
                    </div>
                    <div class="postcard__text">
                        <Link to="/incidental-program">
                            <h1 class="postcard__title yellow"><a href="#">Bencana Sosial</a></h1>
                        </Link>
                        <div class="postcard__subtitle small mb-2">
                            <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					            </time>
                        </div>
                        <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                    </div>
                </div> */}
                <Contact menu={menuData} kontak={kontakData} hubungi={hubungiData} />
            </div>
            <Footer />
        </>
    )
}

export default ProgramList