import React from 'react';
import { Link } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import 'isomorphic-fetch';

const CustomComponent = ({ text }) => <div><img src="http://ruralshores.com/assets/marker-icon.png" alt="map" /></div>;
 
class Contact extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    state = {
        submitting: false,
        submitted: false,
        buttonState: '',
        formFields: {
            name: '',
            email: '',
            phone: '',
            text: ''
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formFields;
        fetch('/api/contact', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (res.status === 200) {
                this.setState({ submitted: true })
            }
            let formFields = Object.assign({}, this.state.formFields);
            formFields.name = '';
            formFields.email = '';
            formFields.phone = '';
            formFields.text = '';
            this.setState({formFields});
        });
    }

    nameChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.name = e.target.value;
        this.setState({formFields});
    }

    emailChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.email = e.target.value;
        this.setState({formFields});
    }

    phoneChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.phone = e.target.value;
        this.setState({formFields});
    }

    textChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.text = e.target.value;
        this.setState({formFields});
    }

    onHideSuccess = () => {
        this.setState({submitted: false});
    }

    successMessage = () => {
        if (this.state.submitted){
            return (
                <div 
                    className="alert alert-success alert-dismissible fade show" 
                    style={{ marginTop: '14px' }}
                >
                    <strong>Thank you!</strong> Your message is send to the owner.
                    <button 
                        type="button" 
                        className="close"
                        onClick={this.onHideSuccess}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }
    }

    render(){
        return (
            <section id="contact" className="contact-area ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        {/* <h4>Get in Touch</h4> */}
                        <h2>Kontak <span>kami</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    
                    <div className="row">
                        
                        <div className="col-lg-4 col-md-12">
                            {/* <div className="contact-form">
                                <h4>Stay Connected</h4>
                            </div> */}
                            <div className="col-lg-12">
                                <div className="contact-one">
                                    <h4>SK Legalitas</h4>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="contact-one">
                                    <Link>
                                        <span>Jl. Sukawarna No.12, Husen Sastranegara, Kec. Cicendo, Kota Bandung, Jawa Barat 40173</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="contact-two">
                                <h4>Hubungi Kami</h4>
                                <ul>
                                    <li>
                                        <Link>
                                            <div className="social-logo">
                                                <i class="fa fa-envelope fa-lg"></i>
                                                <span>Email</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <div className="social-logo">
                                                <i class="fa fa-instagram fa-lg"></i>
                                                <span>Instagram</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <div className="social-logo">
                                                <i class="fa fa-twitter fa-lg"></i> 
                                                <span>Twitter</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <div className="social-logo">
                                                <i class="fa fa-youtube fa-lg"></i>
                                                <span> Youtube</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <div className="social-logo">
                                                <i class="fa fa-spotify fa-lg"></i>
                                                <span>Spotify</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="contact-two">
                                <h4>Menu</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Contact;