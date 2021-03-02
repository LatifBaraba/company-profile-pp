import React from 'react';
import { Link } from 'react-router-dom';
 
class Strategy extends React.Component {
    render(){
        return (
            <section className="strategy-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-5">
                            <div className="image"></div>
                        </div>
                        
                        <div className="col-lg-6 col-md-7">
                            <div className="about-strategy ptb-80">
                                <div className="section-title">
                                    <h4>Highly Creative Solutions</h4>
                                    <h2>About <span>Strategy</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                
                                <ul>
                                    <li><i className="fa fa-check"></i>Creative Design</li>
                                    <li><i className="fa fa-check"></i>Retina Ready</li>
                                    <li><i className="fa fa-check"></i>Responsive Design</li>
                                    <li><i className="fa fa-check"></i>Modern Design</li>
                                    <li><i className="fa fa-check"></i>Awesome Design</li>
                                    <li><i className="fa fa-check"></i>Digital Marketing & Branding</li>
                                </ul>
                                
                                <Link to="#" className="btn btn-primary">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Strategy;