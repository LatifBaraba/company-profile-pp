import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeam } from '../../redux/team/action'
import OwlCarousel from 'react-owl-carousel3';
import { fetchMenu } from '../../redux/menu/action';
import { fetchKontak } from '../../redux/kontak/action';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';

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
            items: 2
        },
        1200: {
            items: 3
        }
    }
}
const StrukturTeam = () => {
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTeam(token))
        dispatch(fetchMenu(token))
        dispatch(fetchKontak(token))
    }, [token])
    const teamData = useSelector((state) => state.teamReducer.team)
    const menuData = useSelector((state) => state.menuReducer.menu)
    const kontakData = useSelector((state) => state.kontakReducer.kontak)
    const hubungiData = useSelector((state) => state.hubungiReducer.hubungi)

    const list_1 =
        teamData.length > 0 &&
        <OwlCarousel
            className="team-slider owl-carousel owl-theme"
            {...options}
        >
            {teamData.map((data, idx) => {
                if (data.flag_id === 1)
                    return (
                        <div className="col-lg-12" key={idx}>
                            <div className="our-team">
                                <div className="pic">
                                    <img src={data.thumbnail_photo_url} alt="team-img" />
                                </div>

                                <div className="team-content">
                                    <h3 className="title">{data.name}</h3>
                                    <span className="post">{data.role}</span>
                                </div>

                                <div className="social">
                                    <ul>
                                        <li><a href={data.facebook_link} className="fa fa-facebook" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.google_link} className="fa fa-google-plus" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.instagram_link} className="fa fa-instagram" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.linkedin_link} className="fa fa-linkedin" rel="noopener noreferrer" target="_blank"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
            })}
        </OwlCarousel>

    const list_2 =
        teamData.length > 0 &&
        <OwlCarousel
            className="team-slider owl-carousel owl-theme"
            {...options}
        >
            {teamData.map((data, idx) => {
                if (data.flag_id === 2)
                    return (
                        <div className="col-lg-12" key={idx}>
                            <div className="our-team">
                                <div className="pic">
                                    <img src={data.thumbnail_photo_url} alt="team-img" />
                                </div>

                                <div className="team-content">
                                    <h3 className="title">{data.name}</h3>
                                    <span className="post">{data.role}</span>
                                </div>

                                <div className="social">
                                    <ul>
                                        <li><a href={data.facebook_link} className="fa fa-facebook" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.google_link} className="fa fa-google-plus" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.instagram_link} className="fa fa-instagram" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.linkedin_link} className="fa fa-linkedin" rel="noopener noreferrer" target="_blank"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
            })}
        </OwlCarousel>

    const list_3 =
        teamData.length > 0 &&
        <OwlCarousel
            className="team-slider owl-carousel owl-theme"
            {...options}
        >
            {teamData.map((data, idx) => {
                if (data.flag_id === 3)
                    return (
                        <div className="col-lg-12" key={idx}>
                            <div className="our-team">
                                <div className="pic">
                                    <img src={data.thumbnail_photo_url} alt="team-img" />
                                </div>

                                <div className="team-content">
                                    <h3 className="title">{data.name}</h3>
                                    <span className="post">{data.role}</span>
                                </div>

                                <div className="social">
                                    <ul>
                                        <li><a href={data.facebook_link} className="fa fa-facebook" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.google_link} className="fa fa-google-plus" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.instagram_link} className="fa fa-instagram" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.linkedin_link} className="fa fa-linkedin" rel="noopener noreferrer" target="_blank"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
            })}
        </OwlCarousel>

    const list_4 =
        teamData.length > 0 &&
        <OwlCarousel
            className="team-slider owl-carousel owl-theme"
            {...options}
        >
            {teamData.map((data, idx) => {
                if (data.flag_id === 4)
                    return (
                        <div className="col-lg-12" key={idx}>
                            <div className="our-team">
                                <div className="pic">
                                    <img src={data.thumbnail_photo_url} alt="team-img" />
                                </div>

                                <div className="team-content">
                                    <h3 className="title">{data.name}</h3>
                                    <span className="post">{data.role}</span>
                                </div>

                                <div className="social">
                                    <ul>
                                        <li><a href={data.facebook_link} className="fa fa-facebook" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.google_link} className="fa fa-google-plus" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.instagram_link} className="fa fa-instagram" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.linkedin_link} className="fa fa-linkedin" rel="noopener noreferrer" target="_blank"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
            })}
        </OwlCarousel>

    const list_5 =
        teamData.length > 0 &&
        <OwlCarousel
            className="team-slider owl-carousel owl-theme"
            {...options}
        >
            {teamData.map((data, idx) => {
                if (data.flag_id === 5)
                    return (
                        <div className="col-lg-12" key={idx}>
                            <div className="our-team">
                                <div className="pic">
                                    <img src={data.thumbnail_photo_url} alt="team-img" />
                                </div>

                                <div className="team-content">
                                    <h3 className="title">{data.name}</h3>
                                    <span className="post">{data.role}</span>
                                </div>

                                <div className="social">
                                    <ul>
                                        <li><a href={data.facebook_link} className="fa fa-facebook" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.google_link} className="fa fa-google-plus" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.instagram_link} className="fa fa-instagram" rel="noopener noreferrer" target="_blank"></a></li>
                                        <li><a href={data.linkedin_link} className="fa fa-linkedin" rel="noopener noreferrer" target="_blank"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
            })}
        </OwlCarousel>
        
    return (
        <>
            <section id="team" className="team-area ptb-80">
                <div className="container">
                    <div className="section-title mt-4">
                        <h2>Top Management</h2>
                    </div>
                    <div className="row">
                        {list_1}
                    </div>
                    <div className="section-title mt-4">
                        <h2>Direktur</h2>   
                    </div>
                    <div className="row">
                        {list_2}
                    </div>
                    <div className="section-title mt-4">
                        <h2>Manager</h2> 
                    </div>
                    <div className="row">
                        {list_3}
                    </div>
                    <div className="section-title mt-4">
                        <h2>Senior Staff</h2>   
                    </div>
                    <div className="row">
                        {list_4}
                    </div>
                    <div className="section-title mt-4">
                        <h2>Staff</h2>
                    </div>
                    <div className="row">
                        {list_5}
                    </div>
                </div>
            </section>
            <Contact menu={menuData} kontak={kontakData} hubungi={hubungiData} />
            <Footer />

        </>
    )
}

export default StrukturTeam