import React, { useEffect } from 'react'
import MainBanner from '../PageBanners/MainBanner';
import Welcome from '../Common/Welcome';
import About from '../Common/About';
// import Strategy from '../Common/Strategy';
// import WhoWeAre from '../Common/WhoWeAre';
// import Ctr from '../Common/Ctr';
// import Skill from '../Common/Skill';
import Funfact from '../Common/Funfact';
// import Team from '../Common/Team';
// import HowWeWork from '../Common/HowWeWork';
// import Services from '../Common/Services';
// import WhyWeDifferent from '../Common/WhyWeDifferent';
import Work from '../Common/Work';
// import Price from '../Common/Price';
// import Faq from '../Common/Faq';
import Testimonial from '../Common/Testimonial';
// import Blog from '../Common/Blog';
import Partner from '../Common/Partner';
// import Subscribe from '../Common/Subscribe';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';
import GoTop from '../Common/GoTop';
import Program from '../Common/Program';
import News from '../Common/News';
import Donasi from '../Common/Donasi';
import Beneficaries from '../Common/Beneficaries';
import { fetchDonasi } from '../../redux/donasi/action';
import { fetchDonasi2 } from '../../redux/donasi/action';
import { fetchBanner } from '../../redux/banner/action';
import { fetchTentang } from '../../redux/tentang/action';
import { fetchProgram } from '../../redux/program/action';
import { fetchBerita } from '../../redux/berita/action';
import { fetchAlbum } from '../../redux/album/action';
import { fetchBeneficaries } from '../../redux/beneficaries/action';
import { fetchPartner } from '../../redux/partner/action';
import { fetchAchievement } from '../../redux/achievement/action';
import { fetchTestimoni } from '../../redux/testimoni/action';
import { fetchMenu } from '../../redux/menu/action';
import { useDispatch, useSelector } from 'react-redux';
 
const HomeTwo = () => {
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDonasi(token))
        dispatch(fetchDonasi2(token))
        dispatch(fetchBanner(token))
        dispatch(fetchTentang(token))
        dispatch(fetchProgram(token))
        dispatch(fetchBerita(token))
        dispatch(fetchAlbum(token))
        dispatch(fetchBeneficaries(token))
        dispatch(fetchPartner(token))
        dispatch(fetchAchievement(token))
        dispatch(fetchTestimoni(token))
        dispatch(fetchMenu(token))
    }, [token]);

    const donasiData = useSelector((state) => state.donasiReducer.donasi)
    const donasi2Data = useSelector((state) => state.donasiReducer.donasi2)
    const bannerData = useSelector((state) => state.bannerReducer.banner)
    const tentangData = useSelector((state) => state.tentangReducer.tentang)
    const programData = useSelector((state) => state.programReducer.program)
    const beritaData = useSelector((state) => state.beritaReducer.berita)
    const albumData = useSelector((state) => state.albumReducer.album)
    const beneficariesData = useSelector((state) => state.beneficariesReducer.beneficaries)
    const partnerData = useSelector((state) => state.partnerReducer.partner)
    const achievementData = useSelector((state) => state.achievementReducer.achievement)
    const testimoniData = useSelector((state) => state.testimoniReducer.testimoni)
    const menuData = useSelector((state) => state.menuReducer.menu)

    return (
        <React.Fragment>
            {/* Main Banner */}
            <MainBanner data={bannerData}/>
            {/* Welcome Area */}
            <Welcome data={donasiData} />
            {/* Donasi Area */}
            <Donasi data={donasi2Data} />
            {/* About Area */}
            <About data={tentangData}/>
            {/* About Area */}
            <Program data={programData}/>
            {/* Strategy Area */}
            {/* <Strategy /> */}
            {/* Who We Are Area */}
            {/* <WhoWeAre /> */}
            {/* CTR Area */}
            {/* <Ctr /> */}
            {/* Skill Area */}
            {/* <Skill /> */}
            {/* Fact Area */}
            <Funfact data={achievementData}/>
            {/* Team Area */}
            {/* <Team /> */}
            {/* How We Work */}
            {/* <HowWeWork /> */}
            {/* Services Area */}
            {/* <Services /> */}
            {/* Why We Are Different */}
            {/* <WhyWeDifferent /> */}
            {/* News Area */}
            <News data={beritaData}/>
            {/* Work Area */}
            <Work data={albumData}/>
            <Beneficaries data={beneficariesData}/>
            {/* Price Area */}
            {/* <Price /> */}
            {/* FAQ Area */}
            {/* <Faq /> */}
            {/* Testimonials Area */}
            <Testimonial data={testimoniData}/>
            {/* Blog Area */}
            {/* <Blog /> */}
            {/* Partner Area */}
            <Partner data={partnerData}/>
            {/* Subscribe Area */}
            {/* <Subscribe /> */}
            {/* Contact Area */}
            <Contact data={menuData}/>
            {/* Footer Area */}
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </React.Fragment>
    );
}
 
export default HomeTwo;