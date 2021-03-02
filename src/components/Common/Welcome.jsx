import React from 'react';
import { Link } from 'react-router-dom';
 
class Welcome extends React.Component {
    render(){
        return (
            <section id="welcome" className="welcome-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h4>We are creative</h4>
                        <h2>Welcome to <span>Addax</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <i className="fa fa-pencil-square-o icon"></i>
                                <h3>Creative Design</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-box">
                                <i className="fa fa-laptop icon"></i>
                                <h3>Friendly Codes</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-box">
                                <i className="fa fa-life-ring icon"></i>
                                <h3>Fast Support</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Welcome;