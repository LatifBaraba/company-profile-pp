import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
 
const Ctr = () => {
    return (
        <section className="ctr-area ptb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="section-title mb-0">
                            <h4>Looking for exclusive services?</h4>
                            <h2>Get The Best For Your Business</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <AnchorLink href="#contact" className="btn btn-primary">Contact</AnchorLink>
                            <AnchorLink href="#work" className="btn btn-primary view-work">View Work</AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
 
export default Ctr;