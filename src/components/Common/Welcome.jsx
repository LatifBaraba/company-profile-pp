import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';



const Welcome = (props) => {
    const convertToRupiah = (angka) => {
        if (angka) {
            var rupiah = '';
            var angkarev = angka.toString().split('').reverse().join('');
            for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
            return 'Rp.' + rupiah.split('', rupiah.length - 1).reverse().join('');
        }

    }
    const donasiData = props.data;
    const options = {
        loop: false,
        autoplay: true,
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
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    }
    return (
        <section id="welcome" className="welcome-area ptb-80">
            <div className="container">
                <div className="section-title">
                    {/* <h4>We are creative</h4> */}
                    <h2>Program Donasi <span>#CeritaDariJalanan</span></h2>
                    <button className="btn btn-primary">Lihat lainnya</button>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>

                <div className="row">
                    {donasiData.length > 0 &&
                        <OwlCarousel className="blog-slider owl-carousel owl-theme" {...options}>
                            {donasiData.map((data, idx) => {
                                const progres = ((data.target - data.donation_collect) * 100) / data.target
                                const bar = ((100/100) - (progres/100)) * 100
                                return (
                                    data.is_show === true ? (
                                        <div className="col-md-12" key={idx}>
                                            <div className="card">
                                                <img className="card-img-top" src={data.thumbnail_image_url} />
                                                <div className="card-body">
                                                    <div className="card-title h5 mb-2">{data.title}</div>
                                                    <p className="card-text mb-2">
                                                        <div className="donasi-progressbar progress" style={{ height: '10px' }}>
                                                            <div role="progressbar" className="progress-bar progress-bar-animated progress-bar-striped" aria-valuemin="0" aria-valuemax="100" style={{ width: `${bar}%` }}></div>
                                                        </div>
                                                    </p>
                                                    <p className="card-text mb-2">
                                                        <div className="dana-terkumpul">
                                                            <span>{convertToRupiah(data.donation_collect)}</span> terkumpul dari <span>{convertToRupiah(data.target)}</span>
                                                        </div>
                                                    </p>
                                                    <div className='text-center'>
                                                        <a href="" className="text-center">
                                                            <button type="button" className="btn btn-primary">Donasi Sekarang</button>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                        : null)
                            }
                            )}
                        </OwlCarousel>
                    }
                </div>
            </div>
        </section>
    );

}

export default Welcome;