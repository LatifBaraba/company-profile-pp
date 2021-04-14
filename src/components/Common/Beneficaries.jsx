import React, { useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/about.jpg';
import OwlCarousel from 'react-owl-carousel3';
import { fetchTentang } from '../../redux/tentang/action'
import { useDispatch, useSelector } from 'react-redux'

const options = {
    loop: true,
    autoplay: false,
    nav: false,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1,
        },
    }
}
 
const Beneficaries = () => {

    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTentang(token))
    }, [])

    const tentangData = useSelector((state) => state.tentangReducer.tentang)
    return (
        <section id="beneficaries" className="about-area ptb-80 bg-f6f6f6">
            <div className="container">
                <div className="section-title">
                    <h2><span>Beneficaries</span></h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
                
                <div className="row">
                    {tentangData.length > 0 &&
                        <OwlCarousel className="blog-slider owl-carousel owl-theme" {...options}>
                            {tentangData.map((data, idx) => (
                                <div className="col-lg-12 col-md-12" key={idx} id={data.id}>
                                    <div className="single-blog-item" style={{backgroundImage: `url(${data.thumbnail_image_url})`, width:"100%", height:"100%"}}>
                                        {/* <span>Business & Tech</span> */}
                                        {/* <h4><Link to="#">The best gear for starting Link small business</Link></h4> */}
                                        {/* <h4>The best gear for starting Link small business</h4> */}
                                        {/* <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta facere quia voluptates similique id quidem praesentium vel dolore modi aliquid facilis nisi, sapiente nemo tenetur quod sunt! Aliquam quasi omnis suscipit saepe assumenda, quas minus maxime, asperiores commodi adipisci dolorem exercitationem iste tempore. Maiores obcaecati tempore placeat et doloremque asperiores libero ex quisquam ut, rerum, fuga ipsa odio nulla quasi vel nostrum laboriosam voluptate architecto sequi repudiandae quidem veritatis vitae minima. Deleniti quas voluptates, ut quidem necessitatibus totam quaerat dolor magnam obcaecati, beatae ex ab cum repellat sed aperiam reprehenderit veniam rem laudantium perferendis nobis cumque! Commodi alias eos praesentium iusto nesciunt? Quos nam minus expedita veniam in? Neque deserunt animi itaque saepe harum, accusamus nulla totam beatae? Repudiandae ullam accusamus cumque nobis, accusantium corrupti veniam velit porro et id molestias ratione quod, tempora inventore totam! Nobis, necessitatibus. Rerum molestiae quod repellat ipsam distinctio necessitatibus voluptatem! Cum dolor nesciunt ab necessitatibus aliquam, mollitia aliquid totam autem est sit, impedit, eligendi illo perspiciatis perferendis aperiam id eum. Maxime, maiores quisquam facere voluptatibus officiis molestiae amet magnam est, repellat esse vel vitae laboriosam tempore, ducimus accusantium fugiat atque! Odio pariatur ratione nostrum voluptas veritatis aliquam qui facere magni, sit at aliquid numquam.</p> */}
                                        
                                        {/* <Link to="/blog-details" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link> */}
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
 
export default Beneficaries;